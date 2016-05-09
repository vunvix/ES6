var width;
var height;
var pi = 3.14;


class AbstractShape
{
    
    constructor(width, height)
    {
        console.log("The caller constructor is "+ this.constructor.name); 
        this.width = width;
        this.height = height;       
        
        
        if (this.constructor === AbstractShape) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
    }
    
    getWidth(){
        return this.width;
    }
    
    getLength(){
        return this.height;
    }
    
    getCenter(){
        throw new TypeError("Do not call abstract method getCenter from child.");
    }
    
    getArea(){
        return this.getLength() * this.getWidth();
    }
    
     getPerimeter(){
        throw new TypeError("Do not call abstract method getPerimeter from child.");
    }
}

class Triangle extends AbstractShape
{
    constructor(base, height){
        super(base, height);
    }
    
    getArea(){
        return super.getArea() / 2;
    }
    
}

class Reactangle extends AbstractShape
{
    constructor(width, height){
        super(width, height);
    }
    
    getPerimeter(){
        //var x = super.getPerimeter();// this should throw exception
        return 2*(this.getWidth() + this.getLength());
    }
}

class Square extends AbstractShape
{
    constructor(width){
        super(width, width);
    }
    
     getPerimeter(){
        //var x = super.getPerimeter();// this should throw exception
        return 4* this.getLength();
    }
    
}

class Circle extends AbstractShape
{
    constructor(radius){
        super(radius, radius);
       this.radius = radius;
    }
    
    getArea(){
        var a1 = super.getArea();
        return pi * a1;
    }
    
     getPerimeter(){
        //var x = super.getPerimeter();// this should throw exception
        return 2*pi*this.getWidth();
    }
    
}

//var abstractStuff = new AbstractShape(1,2); // this should throw exception
var triangle = new Triangle(3,4);
console.log("Triangle area = " + triangle.getArea());

var rectangle = new Reactangle(3,4);
console.log("Reactangle area = " + rectangle.getArea());
console.log("Reactangle perimeter = " + rectangle.getPerimeter());

var square = new Square(4);
console.log("Square area = " + square.getArea());
console.log("Square perimeter = " + square.getPerimeter());

var circle = new Circle(4);
console.log("Circle area = " + circle.getArea());
console.log("Circle perimeter = " + circle.getPerimeter());