/*
var : Keyword used by Javascript (and typescript) to declare globally accessible variables.
	  Variable declared with this keyword, becomes accessible outside the scope where it is defined.

let : Keyword  introduced by ES6, to declare "local" variables, which are 'destroyed' immediately 
		after the scope ends.
*/
for(let i=0;i<5;i++){
	var msg = "Hello "+i;
	console.log("Inside loop: "+msg);
}
// No error for using `msg` out side the loop
console.log("Outside the loop: "+msg);
// ERROR for Undefined variable 'i'
console.log("Last Index"+i);