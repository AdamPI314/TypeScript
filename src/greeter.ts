class Student {
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

var sumAll = function (...nums: number[]):
    void {
    var sum = nums.reduce((a, b) => a + b, 0);
    document.write("Sum " + sum + "<br />")
}

sumAll(1, 2, 3, 4);

var addOne = (x) => x + 1;
document.write("1 + 1 = " + addOne(1) + "<br />");

class Animal {
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    }

    static howManyAnimals() {
        return Animal.numOfAnimals;
    }

    private _weight: number;
    get weight() {
        return this._weight;
    }
    set weight(weight: number) {
        this._weight = weight;
    }
}

var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's weight is " + spot.weight + "<br />");
document.write("Number of Animals is " + Animal.howManyAnimals() + "<br />");

class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
    }
}

var grover = new Animal("Grover", "Jimmy");
document.write("Number of Animals is : " + Animal.howManyAnimals() + "<br />");
document.write("Is a dog a Animal : " + (grover instanceof Animal) + "<br />");
document.write("Does Grover has a name : " + ('name' in grover) + "<br />");

interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheels: number) { }

    drive(): void {
        document.write("Car drives with  " + this.wheels + " wheels <br />");

    }
}
class Bicycle implements Vehicle {
    constructor(private wheels: number) { }

    drive(): void {
        document.write("Bicycle drives with  " + this.wheels + " wheels <br />");

    }
}

var car = new Car(4);
car.drive();
var bike = new Bicycle(2);
bike.drive();

// generic functions
function GetType<T>(val: T): string {
    return typeof (val);
}

var aStr = "haha";
var aNum = 10;

document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");

function GetWheels<w extends Vehicle>(veh: w): number {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);

// generic classes
class GenericNumber<T>{
    // arrow function
    add: (val1: T, val2: T) => T;
}
var aNumber = new GenericNumber<number>();
aNumber.add = function (x, y) { return x + y; }

document.write("5 + 4 = ", aNumber.add(5, 4) + "<br />");

// destructuring
var ranVals = { x: 1, y: 2, z: 3 };

var { x, y, z } = ranVals;
document.write("x + y + z = ", (x + y + z) + "<br />");

// template strings
var multStr = `I go on for
many lines<br />`
document.write(multStr);
document.write(`<b>${multStr}</b>`);

// rest type
function theSum(x, y, z): void {
    document.write("x + y + z = " + (x + y + z) "<br />");
}
var args = [4, 5, 6];
theSum(...args);

// enumerate types
enum Emotion {
    Happy = 1,
    Sad,
    Angry
}

var myFeeling = Emotion.Happy;

myFeeling = 1;
