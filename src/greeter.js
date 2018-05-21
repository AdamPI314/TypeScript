var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum " + sum + "<br />");
};
sumAll(1, 2, 3, 4);
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br />");
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's weight is " + spot.weight + "<br />");
document.write("Number of Animals is " + Animal.howManyAnimals() + "<br />");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        return _super.call(this, name, owner) || this;
    }
    return Dog;
}(Animal));
var grover = new Animal("Grover", "Jimmy");
document.write("Number of Animals is : " + Animal.howManyAnimals() + "<br />");
document.write("Is a dog a Animal : " + (grover instanceof Animal) + "<br />");
document.write("Does Grover has a name : " + ('name' in grover) + "<br />");
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("Car drives with  " + this.wheels + " wheels <br />");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write("Bicycle drives with  " + this.wheels + " wheels <br />");
    };
    return Bicycle;
}());
var car = new Car(4);
car.drive();
var bike = new Bicycle(2);
bike.drive();
// generic functions
function GetType(val) {
    return typeof (val);
}
var aStr = "haha";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
// generic classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
document.write("5 + 4 = ", aNumber.add(5, 4) + "<br />");
// destructuring
var ranVals = { x: 1, y: 2, z: 3 };
var x = ranVals.x, y = ranVals.y, z = ranVals.z;
document.write("x + y + z = ", (x + y + z) + "<br />");
// template strings
var multStr = "I go on for\nmany lines<br />";
document.write(multStr);
document.write("<b>" + multStr + "</b>");
// rest type
function theSum(x, y, z) {
    document.write("x + y + z = " + (x + y + z), "<br />");
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
// enumerate types
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
myFeeling = 1;
