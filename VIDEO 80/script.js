// let animal = {
//eats : true
//};

//let rabbit = {
// jumps : true
// };

// rabbit._proto_ = animal; // sets rabbit [[Prototype]] = animal 

class animal {
    constructor(name) {
        this.name = name
        console.log("object is created...")
    }

    eats() {
        console.log("Kha raha hoon")
    }

    jumps() {
        console.log("Kood raha hoon")
    }
}


class Lion extends animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats() {
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)