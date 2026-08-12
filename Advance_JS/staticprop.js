class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  static createID() { // static key word does not give the access to object
    return `123`;
  }
}

 const yash = new User('Yash')
 console.log(yash.createID());
 