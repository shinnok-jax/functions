 var a = 2; 
 	 h = 3;

 function getTriangleArea(a, h) {

 	if (a > 0 && h > 0 ) {
 		return (a*h/2);
 	}
 	else {
 		return('Nieprawidłowe dane');
 	}

}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);

var triangle2Area = getTriangleArea(10, 10);
var triangle3Area = getTriangleArea(15, 12);
var triangle4Area = getTriangleArea(16, 11);

console.log(triangle3Area);