class Employee {
	_id: number;
	_name: string;
	_salary: number;

	constructor(id:number, name:string , salary:number ){
		this._id = id;
		this._name = name;
		this._salary = salary;
	}

	print = function(){
		console.log("Employee ID: "+this._id+", Name: "+this._name+", salary: "+this._salary);
	}
}

let e1: Employee = new Employee(101, "Mahendra Shinde", 100000);
e1.print();