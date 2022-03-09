/*
Set:	Collection of Objects which are not given any INDEX nor ORDER.
*/
/// <reference lib="es2015"/>
var numbers = new Set();
numbers.add(100);
numbers.add(10);
numbers.add(34);
numbers.forEach(function (x) {
    console.log(x);
});
