
// ********
// "Named export" syntax: WITH CURLY BRACES
// import{ greetUser, name } from './../imports/utils';

// ********
// "export default" syntax: REMOVE CURLY BRACES FROM IMPORT STATEMENT
// import add from './../imports/math';

// console.log('Log from /server/main.js');

import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup(() => {
	
	// Define Person CLASS once
	// THe BASICS of CLASSES: Define a CLASS, Define a CONSTRUCTOR func, Define custom methods
	class Person{
		// Pass in default value
		constructor(name = 'Anonymous', age = 0){
			this.name = name;
			this.age = age;
		}
		getGreeting(){
			// BACKTICK = TEMPLATE String or Template Literal
			return `Hi! I am ${this.name}.`;
		}

		getPersonDescription(){
			return `${this.name} is ${this.age} years old.`;
		}
	}

	// Syntax to create a subclass. Employee will have access to all person methods,
	// plus any additional props/methods exclusive to Employees.
	class Employee extends Person {
		constructor(name,age,title){
			// super() =  Special keyword/method ALWAYS needed in subclass constructors to create new and/or access existing properties utilizing 'this' (this.name etc)
			super(name, age);
			this.title = title;
		}
		getGreeting(){
			if(this.title){
				return `Hi! I am ${this.name}. I work as a ${this.title}.`;
			}else{
				return super.getGreeting();
			}
		}

		hasJob(){
			// !! converts the code into a Boolean evaluation;
			return !!this.title;
		}
	}

// new CLASS
	class Programmer extends Person {
		// add CONSTRUCTOR
		constructor(name, age, preferredLanguage = 'Assembly'){
			// include SUPER()
			super(name, age);
			// add exclusive props/methods
			this.preferredLanguage = preferredLanguage;
		}
		getGreeting(){
			return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
		}
	}



let josh = new Programmer('Josh', 26, 'iOS');
let aaron = new Programmer('Aaron', 40);

// console.log(josh.getGreeting());
// console.log(aaron.getGreeting());
	// let me = new Employee('Aaron', 40, 'creative director');
	// console.log(me.getGreeting());
	// console.log(me.hasJob());
	
	// let molly = new Employee('Molly', 25);
	// console.log(molly.getPersonDescription());
	// console.log(molly.hasJob());
	// console.log(molly.getGreeting());
	// console.log(me.title)


});
