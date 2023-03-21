Rectangle.prototype.area = function () {
    return this.w * this.h;
};

class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.h = s;
        this.w = s;
    }
}

if (
    JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) ===
    JSON.stringify(["constructor"])
) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
} else {
    console.log(-1);
    console.log(-1);
}
