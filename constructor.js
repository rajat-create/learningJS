class Rectangle{
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        const area = this.height * this.width;
        return area;

    }

    paint(){
        console.log("paint the area with ${this.color}" ); 
    }

}

const r1 = new Rectangle(21 , 50 , "blue")
const area = r1.area();
console.log(area);