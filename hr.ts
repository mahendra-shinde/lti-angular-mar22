/**
 * TypeScript module is `Just a file` that contains few component (classes, functions, interfaces etc)
 * When filename is `hr.ts` the module name would be `hr`

 */

// Use `export` keyword for `public` members
export class Employee {
	empId: number;
	ename: string;
}

// DO NOT Use `export` for private members
class Department {
	deptId: number;
	dname : string;
}