export class GameStorage {
  private db!: IDBDatabase;

  constructor(private dbName: string, private version: number) {}

  public async init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = (event) => {
        console.log("Error opening IndexedDB:", event);
        reject(new Error("Error opening IndexedDB"));
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        // create object store name here
        if (!this.db.objectStoreNames.contains("characters")) {
          this.db.createObjectStore("characters", { keyPath: "id" });
        }
        // Note: We don't resolve the promise here because the onsuccess event will be fired after onupgradeneeded
      };
    });
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

  public readOne(objectStoreName: string, key: any): Promise<any | null> {
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

  public readAll(objectStoreName: string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([objectStoreName], "readonly");
      const objectStore = transaction.objectStore(objectStoreName);
      const request = objectStore.getAll();

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
