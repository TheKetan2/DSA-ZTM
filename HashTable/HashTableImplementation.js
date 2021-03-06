class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    this.data[this._hash(key)] = value;
  }
  get(key) {
    return this.data[this._hash(key)]
      ? this.data[this._hash(key)]
      : "Bucket is empty";
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Ketan", "Billionaire");
myHashTable.get("Ketan");

// My Implementaion
