//Classes in javascript
class Rectangle {
    constructor(width,height,color){
       this.width=width;
       this.height=height;
       this.color=color; 
    }
    area(){
        const area =this.width*this.height;
        return area;
    }
    paint(){
        console.log(`The rectangle is painted with ${this.color} color`);
    }
}
const rect=new Rectangle(2,4,"Blue");
const rect2=new Rectangle(3,4,"Black");
const rect3=new Rectangle(5,4,"White");
const area=rect.area();
const paint=rect.paint();
const area2=rect2.area();
const paint2=rect2.paint();
const area3=rect3.area();
const paint3=rect3.paint();
console.log(area);
console.log(area2);
console.log(area3);
//This variable gives you acces to the current object inside the constructor