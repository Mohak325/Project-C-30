class Polygon{
    constructor(x,y){
        var options={
            density : 0.2
        }
        this.body = Bodies.rectangle(x,y,30,30,options);
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }
}