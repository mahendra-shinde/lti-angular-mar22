var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.print = function () {
            console.log("Employee ID: " + this._id + ", Name: " + this._name + ", salary: " + this._salary);
        };
        this._id = id;
        this._name = name;
        this._salary = salary;
    }
    return Employee;
}());
var e1 = new Employee(101, "Mahendra Shinde", 100000);
e1.print();
