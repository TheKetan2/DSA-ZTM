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
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBuket = this.data[address];
    console.log(currentBuket);
    if (currentBuket) {
      for (let i = 0; i < currentBuket.length; i++) {
        return;
      }
      currentBuket[i][1];
    }
    return undefined;
  }

  key() {
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0]);
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Ketan", "Billionaire");
myHashTable.get("Ketan");

// My Implementaion
