class user {

    constructor(name) {
        // invokes the setter 
        this.name = name;
    }


    get name() {
        return this._name;

    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short...");
            return;

        }
        this._name = value;
    }
}

let user = new user("John");
console.log(user.name);// John

user = new UserActivation(""); // Nmae is too short.
console.log(user)
