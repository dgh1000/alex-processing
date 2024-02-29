canvasSize = 400;

function setup() {
    createCanvas(canvasSize, canvasSize);
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static fromMagAngle(mag, radians) {
        return new Vector(mag*Math.cos(radians), mag*Math.sin(radians));
    }

    normalize() {
        let mag = Math.sqrt(this.x*this.x + this.y*this.y);
        return new Vector(this.x/mag, this.y/mag);
    }

    mag() {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    rotate(radians) {
        let currAngle = Math.atan2(this.y, this.x);
        // let rotationAngle = Math.PI * degrees / 180;
        let newAngle = currAngle + radians;
        let newX = this.mag() * Math.cos(newAngle);
        let newY = this.mag() * Math.sin(newAngle);
        return new Vector(newX, newY);
    }

    setAngle(radians) {
        let m = this.mag();
        let newX = m * Math.cos(radians);
        let newY = m * Math.sin(radians);
        return new Vector(newX, newY)
    }

    mult(scalar) {
        return new Vector(this.x*scalar, this.y*scalar);
    }
}

let v = new Vector(1, 0);
v = v.setAngle(45);
console.log(v.x, v.y);

let posX = 0;
let posY = 200;
let delta = Vector.fromMagAngle(3, 0.8);
function draw() {
    background(0);
    ellipse(posX, posY, 50, 50);
    posX += delta.x;
    posY += delta.y;
    delta = delta.mult(0.995);
    if (posX > canvasSize || posX < 0) {
        let newDelta = new Vector(-delta.x, delta.y);
        newDelta = newDelta.normalize();
        newDelta = newDelta.mult(3);
        delta = newDelta;
    }
    if (posY > canvasSize || posY < 0) {
        let newDelta = new Vector(delta.x, -delta.y);
        newDelta = newDelta.normalize();
        newDelta = newDelta.mult(3);
        delta = newDelta;
    }
}