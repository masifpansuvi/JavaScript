class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log('you can view data')
    }
}
class Admin extends User {
    editData(){
        console.log('you can edit data')
    }
}

let std = new User('Asif','asifpansuvi')
let admin = new Admin('sarif','admin@abc.com')