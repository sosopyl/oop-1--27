//2 -7
// class Employee{
// name;
// age;
// salary;
// ns(name, salary){
//     console.log(name + " " + salary)
// }
// meow(){
//     console.log('meow')
// }
// mname(){
//     console.log(this.name)
// }
// msalary(){
//     console.log(this.salary)
// }
// }



// let employeer = new Employee;
// let employeer1 = new Employee
// let employeer2 = new Employee

// employeer.name = 'meow'
// employeer.age = 19;
// employeer.salary = 100;

// employeer1.name = 'meow1'
// employeer1.age = 20;
// employeer1.salary = 200;

// employeer2.name = 'meow2'
// employeer2.age = 21;
// employeer2.salary = 300;

// console.log(employeer)
// console.log(employeer.name + ' ' + employeer.age + ' ' + employeer.salary)
// console.log(employeer.salary + employeer1.salary +employeer2.salary)

// employeer.meow()
// employeer.ns(employeer.name, employeer.salary)
// employeer.mname()
// employeer.msalary()

//8-9

// class Student{
//     name = 'nemeow';
//     surn = 'neaaa';
//     show(){
//         console.log(this.cape(this.name) + " " + this.cape(this.surn))
//     }
//     cape(str){
//         return str[0].toUpperCase() + str.slice(1);
//     }
// }

// let student = new Student;
// // student.name = 'meow'
// // student.surn = 'aaa'
// student.show()

//10 - 12
// class Employee{
//    constructor(name, salary) {
// //		console.log(name + ' ' + salary);
//         this.name = name;
//         this.salary = salary
// 	}
//     show() {
// 		return this.name + ' ' + this.salary;
// 	}
//     more() {
//         return this.salary * 1.1
//     }
// }

// let employeer = new Employee('meow', 100);
// console.log(employeer.more())

//13

// class Employee{
//     #name;
//     #salary;
//     #age
// 	constructor(name, salary, age) {
//         this.#salary = salary;
//         this.#name = name;
//         this.#age = age;
// 	}
//     show() {
// 		return (this.#name + ' ' + this.salary + ' ' + this.age)
// 	}
//     }
//     let employeer = new Employee('meow', '100', '18')
//     console.log(    employeer.show())

//14
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }

//15
//1
// class Employee {
// 	constructor(name, salary) {
// 		this._name = name;
// 		this._salary = salary;
// 	}
	
// 	getName() {
// 		return this._name;
// 	}
// 	getSalary() {
// 		return this._salary;
// 	}
// }
//2
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this._addSign(this.salary);
// 	}
	
// 	_addSign(num) {
// 		return num + '$';
// 	}
// }

//16-19
// class Employee  {
// 	#name;
// 	#salary
//     #age
	
// 	constructor(name, salary) {
// 		this.#name = name;
// 		this.#salary = salary;
//         this.#age = age;
// 	}
	
//     setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
//     setSalary(salary) {
// 		this.#salary = salary;
//         return this;
// 	}
//     setAge(age) {
//         if(age >= 0 & age <= 120){
//             this.#age = age;
//             return this;
//         }else {
// 			throw new Error('age is incorrect');
// 		}
// 	}

// 	getName() {
// 		return this.#name;
// 	}
//     getAge() {
// 		return this.#age;
// 	}
// 	getSalary() {
// 		return this.#salary + '$';
// 	}
// }

//20
//1 false
//2 true
//3 false
//4 false
//5 true
//6 true
//7 true

//21

//1 true false
// //2
// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];

// for(let user of users){
//     if (user instanceof Employee){
//         console.log(user.name)
//     }
// }

//22
// class ArrHelper {
// 	getSum(arr) {
// 		let res = 0;
		
// 		for (let num of arr) {
// 			res += num;
// 		}
		
// 		return res;
// 	}
	
// 	getAvg(arr) {
// 		if (arr.length > 0) {
// 			let sum = this.getSum(arr);
// 			return sum / arr.length;
// 		} else {
// 			return 0;
// 		}
// 	}
// }

//23
// class Position {
// 	constructor(position) {
// 		this.position = position;
// 	}
// }
// class Department {
// 	constructor(department) {
// 		this.department = department;
// 	}
// }
// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }
// let department = new Department('meow');
// let position = new Position('there');
// let employeer = new Employee('john', position, department);

//24
// class  Employee {
// 	#name;
// 	#salary

// 	constructor(name, salary) {
// 		this.#name = name;
//         this.#salary = salary;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
//     getSalary() {
// 		return this.#salary;
// 	}
// }
// let employeers = [
// 	new  Employee('john', 100),
// 	new  Employee('eric', 200),
// 	new  Employee('kyle', 300),
// ];
// for (let employeer of employeers) {
// 	console.log(employeer.getName() + ' ' + employeer.getSalary());
// }

//25
// class EmployeesCollection {
// 	#employees;
	
// 	constructor() {
// 		this.#employees = [];
// 	}
// 	add(employeer) {
// 		this.#employees.push(employeer);
// 	}
// 	show() {
// 		for (let employeer of this.#employees) {
// 			console.log(employeer.getName());
// 		}
// 	}
//     getName() {
// 		return this.#employees;
// 	}
//     getSummary(){
//         let sum = 0
//         for (let employeer of this.#employees) {
// 			sum += +(employeer.getName());
// 		}
//         console.log(sum)
//     }
//     getMediumSummary(){
//         let sum = 0
//         for (let employeer of this.#employees) {
// 			sum += +(employeer.getName());
// 		}
//         let res = sum / this.#employeers.length
//         console.log(res)
//     }
// }

//26
//27
