class Caja{
constructor(x, y, widht, height){
    var options = {

        density:0.4,
        friction:1,
        restitution: .8        
    };
this.body = Bodies.rectangle(x, y, 50, 50, options);
this.width = 50;
this.height = 50;
World.add(world, this.body);
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
stroke(0);
strokeWeight(3.5);
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0, this.width, this.height);
pop();

}
}