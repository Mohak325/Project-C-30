class Block{
    constructor(x, y, width, height) {
        var options = {
           density : 0.2 ,
           fricton : 1.5      
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png");
        this.Visiblity = 255;
      }
      display(){
        if(this.body.speed<5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          this.Visiblity = this.Visiblity -1;
          tint(225,this.Visiblity);
          image(this.image,this.body.position.x,this.body.position.y,30,40);
        }
      }
}
