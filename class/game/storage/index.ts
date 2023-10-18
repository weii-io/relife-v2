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

  public write(instance: Object) {}
  public read() {}
}
