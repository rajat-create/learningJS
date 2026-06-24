// class Rectangle{
//     constructor(height, width, color){
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     area(){
//         const area = this.height * this.width;
//         return area;

//     }



//     paint(){
//         console.log("paint the area with ${this.color}" ); 
//     }

// }

// const r1 = new Rectangle(21 , 50 , "blue")
// const area = r1.area();
// console.log(area);



class Shape{
    constructor(color , depth){
        this.color = color;
        this.depth = depth;

    }
    paint(){
        console.log('The color of shape ${this.color}')
    }
    

}

class Rectangle extends Shape{
    constructor(height , width, color , depth ){

        super(color, depth);
        this.height = height;
        this.width = width;

    }
    area(){
        const area = this.height * this.width;
        return area;
    }
    perimeter(){
        const perimeter = (height + width)*2;
        return perimeter;
    }
}

class Square extends Shape{
    constructor(side, color , depth ){

        super(color, depth);
        this.side = side;
        this.width = width;

    }
    area(){
        const area = this.side * this.side ;
        return area;
    }
    perimeter(){
        const perimeter = (side)*4;
        return perimeter;
    }
}

class Circle extends Shape{
    constructor(radius, color , depth ){

        super(color, depth);
        this.radius = radius;

    }
    area(){
        const area = 3.14 * this.radius * this.radius;
        return area;
    }
    perimeter(){
        return 2 * 3.14 * this.radius;
    }
    
}