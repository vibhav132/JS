class Point{
    constructor(x1,y1,x2,y2){
        this.x1=x1;
        this.y1=y1;
        this.y2=y2;
        this.x2=x2;
    }
    distance(){
        return Math.sqrt((this.x1-this.x2)*(this.x1-this.x2)+(this.y1-this.y2)*(this.y1-this.y2))
    }
}

let p = new Point(0,0,3,5);
p.distance()