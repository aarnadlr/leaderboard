
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

});

//object spread operator - copy properties from one object to another

// let user = {
// 	name: 'Aaron',
// 	location: 'Philadelphia'
// }

// let person = {
// 	// 'Spread' the properties of user to person
// 	...user,
// 	age: 25,
// }
