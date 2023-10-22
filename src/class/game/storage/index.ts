export class GameStorage {
  private db!: IDBDatabase;

  constructor(private dbName: string, private version: number) {
    this.init();
  }

  private init(): void {
    const request = indexedDB.open(this.dbName, this.version);

    request.onerror = (event) => {
      console.log("Error opening IndexedDB:", event);
    };

    request.onsuccess = (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
    };

    // TODO: review this code fragment
    request.onupgradeneeded = (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
      if (!this.db.objectStoreNames.contains("gameState")) {
        this.db.createObjectStore("gameState", { keyPath: "id" });
      }
    };
  }

  public write(objectStoreName: string, key: any, data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([objectStoreName], "readwrite");
      const objectStore = transaction.objectStore(objectStoreName);

      // Combining the key with the data
      const combinedData = { ...data, id: key };

      const request = objectStore.put(combinedData);

      request.onerror = (event) => {
        console.error(
          `Error writing to ${objectStoreName} in IndexedDB:`,
          event
        );
        reject(event);
      };

      request.onsuccess = () => {
        resolve();
      };
    });
  }

  public read(objectStoreName: string, key: any): Promise<any | null> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([objectStoreName], "readonly");
      const objectStore = transaction.objectStore(objectStoreName);
      const request = objectStore.get(key);

      request.onerror = (event) => {
        console.error(
          `Error reading from ${objectStoreName} in IndexedDB:`,
          event
        );
        reject(event);
      };

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result);
        } else {
          resolve(null);
        }
      };
    });
  }
}
