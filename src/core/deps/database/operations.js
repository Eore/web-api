let connection = require("./connection");

class Database {
  constructor() {
    this.collectionName = null;
  }

  insert(data) {
    return connection()
      .then(dbo => dbo.collection(this.collectionName))
      .then(collection => collection.insert(data))
      .catch(err => {
        console.error("Insert error");
      });
  }
}

module.exports = Database;
