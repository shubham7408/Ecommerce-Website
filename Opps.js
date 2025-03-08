//Objects and Classses

class Car {
    constructor(brand,model,color) {
        this.brand = brand;
        this.color = color;
        this.model = model;
    }

    drive () {
        console.log(`Drive the ${this.model} and ${this.color} from the ${this.brand}`);
    }
}
const mod = new Car("Mahindra","Bolero","Red");
console.log(mod);
mod.drive();


const myCar = new Car("Suzuki","Swift","White");
myCar.drive();


//Encapsulation with classes and Object

class BankAccount {
    #balance = 0;

    constructor(amount) {
        this.#balance = amount;
    }

    deposit (amount) {
        this.#balance += amount;
    }

    getbalance () {
        return this.#balance;
    }

    withdrawbalance (amount) {
        return this.#balance -= amount;
    }
}

const account = new BankAccount(1000);
account.deposit(100);
console.log(account.getbalance());
account.withdrawbalance(200);
console.log(account.getbalance());


const account2 = new BankAccount(4500);
account2.withdrawbalance(500);
console.log(account2.getbalance());
account2.deposit(1000);
console.log(account2.getbalance());

//Inheritance - One class can inherit from anaother class
class Animal {
    eat () {
        console.log("Eating...");
    }
}

class Dog extends Animal  {
    bark () {
        console.log("barking....");
    }
}

const dog = new Dog ();
dog.eat();

//polymorhisum Overriding methods in derived classes to provide specific behavior.
class Animal1 {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog1 extends Animal1 {
    makeSound() {
        console.log("Dog barks");
    }
}

const myDog = new Animal1();
myDog.makeSound(); // Dog barks

//Abstraction Hide complex Logic and Expose only Essienstal

class Shape {

    constructor() {
        if(this.constructor === Shape){
            throw new Error("Abstact class not access");
        }
    }

    //Abstract method
    area () {
        throw new Error("Method area must be implemented")
    }
}

//Practise roblems

class Car2 {
    constructor(type,subclass){
        this.type = type;
        this.subclass = subclass;
    }

    display () {
        console.log(`The car is ${this.type} and ${this.subclass}`);
    }
}

const mycars = new Car2("Sedan","Under 4 meter");
console.log(mycars);

class BankAccountNew {
    #balancenew = 0;
    constructor(ruppe) {
        this.#balancenew = ruppe;
    }

    deposit(amount) {
        this.#balancenew += amount;
    }

    getbalanceNew(){
        return this.#balancenew
    }

    withdrawbalanceNew (amount){
        return this.#balancenew -= amount;
    }
}

const myaccount = new BankAccountNew(430);
console.log(myaccount.getbalanceNew());
myaccount.deposit(500);
console.log(myaccount.getbalanceNew());
myaccount.withdrawbalanceNew(500);
console.log(myaccount.getbalanceNew());