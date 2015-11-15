var i=10;

function A (x) {
	x=i*x;
	return x;
}

function B (y) {
	y=2*i*y;
	return y;
}

function C (z) {
	z=4*i*z;
	return z;
}

var t=A(B(C(2)));
console.log(t);
