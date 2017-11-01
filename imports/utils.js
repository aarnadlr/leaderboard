console.log('Log from /imports/utils.js');

// NAMED EXPORT
export let greetUser = function() {
	return 'Hello user!!!';
};

// NAMED EXPORT
export let name = 'Aaron Adler';


// DEFAULT EXPORT: allows you to export without a var name
// (DOESNT EVEN LET YOU HAVE A VAR-NAME AFTER 'default')
export default 'Default val';


