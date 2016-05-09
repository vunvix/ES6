"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var width;
var height;
var pi = 3.14;

var AbstractShape = function () {
    function AbstractShape(width, height) {
        _classCallCheck(this, AbstractShape);

        console.log("The caller constructor is " + this.constructor.name);
        this.width = width;
        this.height = height;

        if (this.constructor === AbstractShape) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
    }

    _createClass(AbstractShape, [{
        key: "getWidth",
        value: function getWidth() {
            return this.width;
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return this.height;
        }
    }, {
        key: "getCenter",
        value: function getCenter() {
            throw new TypeError("Do not call abstract method getCenter from child.");
        }
    }, {
        key: "getArea",
        value: function getArea() {
            return this.getLength() * this.getWidth();
        }
    }, {
        key: "getPerimeter",
        value: function getPerimeter() {
            throw new TypeError("Do not call abstract method getPerimeter from child.");
        }
    }]);

    return AbstractShape;
}();

var Triangle = function (_AbstractShape) {
    _inherits(Triangle, _AbstractShape);

    function Triangle(base, height) {
        _classCallCheck(this, Triangle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Triangle).call(this, base, height));
    }

    _createClass(Triangle, [{
        key: "getArea",
        value: function getArea() {
            return _get(Object.getPrototypeOf(Triangle.prototype), "getArea", this).call(this) / 2;
        }
    }]);

    return Triangle;
}(AbstractShape);

var Reactangle = function (_AbstractShape2) {
    _inherits(Reactangle, _AbstractShape2);

    function Reactangle(width, height) {
        _classCallCheck(this, Reactangle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Reactangle).call(this, width, height));
    }

    _createClass(Reactangle, [{
        key: "getPerimeter",
        value: function getPerimeter() {
            //var x = super.getPerimeter();// this should throw exception
            return 2 * (this.getWidth() + this.getLength());
        }
    }]);

    return Reactangle;
}(AbstractShape);

var Square = function (_AbstractShape3) {
    _inherits(Square, _AbstractShape3);

    function Square(width) {
        _classCallCheck(this, Square);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this, width, width));
    }

    _createClass(Square, [{
        key: "getPerimeter",
        value: function getPerimeter() {
            //var x = super.getPerimeter();// this should throw exception
            return 4 * this.getLength();
        }
    }]);

    return Square;
}(AbstractShape);

var Circle = function (_AbstractShape4) {
    _inherits(Circle, _AbstractShape4);

    function Circle(radius) {
        _classCallCheck(this, Circle);

        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, radius, radius));

        _this4.radius = radius;
        return _this4;
    }

    _createClass(Circle, [{
        key: "getArea",
        value: function getArea() {
            var a1 = _get(Object.getPrototypeOf(Circle.prototype), "getArea", this).call(this);
            return pi * a1;
        }
    }, {
        key: "getPerimeter",
        value: function getPerimeter() {
            //var x = super.getPerimeter();// this should throw exception
            return 2 * pi * this.getWidth();
        }
    }]);

    return Circle;
}(AbstractShape);

//var abstractStuff = new AbstractShape(1,2); // this should throw exception


var triangle = new Triangle(3, 4);
console.log("Triangle area = " + triangle.getArea());

var rectangle = new Reactangle(3, 4);
console.log("Reactangle area = " + rectangle.getArea());
console.log("Reactangle perimeter = " + rectangle.getPerimeter());

var square = new Square(4);
console.log("Square area = " + square.getArea());
console.log("Square perimeter = " + square.getPerimeter());

var circle = new Circle(4);
console.log("Circle area = " + circle.getArea());
console.log("Circle perimeter = " + circle.getPerimeter());