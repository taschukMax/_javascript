var shape = {
    type: "Triangle",
    getType: function () {
        return this.type;
    }
};

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
};
var triangle = new Triangle(1, 2, 3);
console.log(triangle.constructor);
/*console.log(shape.isPrototypeOf(triangle));
 console.log(triangle.getPerimeter());
 console.log(triangle.getType());*/
Array.prototype.shuffle = function () {
    return "Array";
};

String.prototype.reverse = function () {
    return Array.prototype.reverse.apply(this.split('')).join('');
};

console.log("MAXIM".reverse());
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle());
