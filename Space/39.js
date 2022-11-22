class User {
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends User {
	setSalary(salary) {
		this._salary = salary;
	}
	getSalary() {
		return this._salary;
	}
}

class Programmer extends Employee {
	setProgrammer(code) {
		this._code = code;
	}
	getProgrammer() {
		return this._code;
	}
}

class Designer extends Employee {
	setDesigner(draw) {
		this._draw = draw;
	}
	getDesigner() {
		return this._draw;
	}
}