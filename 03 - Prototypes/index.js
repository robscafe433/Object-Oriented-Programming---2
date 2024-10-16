// Creating a constructor function

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

// This exercise is to practice prototypes. Which  reduces overhead because in this example the function is not inside of the object.

Car.prototype.consoleMessage = function () {
	console.log(
		"I drive a ",
		this.make,
		this.model,
		"which was built in: ",
		this.year
	);
};

const myCar = new Car("Toyota", "Tundra", 1997);

myCar.consoleMessage();
