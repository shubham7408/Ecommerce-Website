class Car {
    constructor (brand,color,model) {
        this.brand = brand;
        this.color = color;
        this.model = model;
    }

    getBrand() {
        return this.brand;
    }

    getColor() {
        return this.color;
    }

    getModel() {
        return this.model;
    }

    drive () {
        console.log(`The brand is ${this.brand} and model is ${this.model} is driving, with color ${this.color}`);
    }
}

const myCar = new Car("Toyota","Red","Corolla");
console.log(myCar);
myCar.drive();

const myCar2 = new Car("Honda","Blue","Civic");
console.log(myCar2);
myCar2.drive();


class BankAccount {
    #balance = 0;
    constructor (accountNumber, accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
    }
    
    deposit(amount) {
        this.#balance = this.#balance + amount;
    }
    
    withdraw(amount) {
        this.#balance -= amount;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    static interestRate = 0.05;
    
    static calculateInterest(balance) {
        return balance * BankAccount.interestRate;
    }
}

const myAccount = new BankAccount("1234567890", "John Doe");
console.log(myAccount);
myAccount.deposit(1000);
console.log(myAccount.getBalance());

myAccount.withdraw(500);
console.log(myAccount.getBalance());

console.log(BankAccount.calculateInterest(1000));