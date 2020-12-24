class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.8,
            frictionAir:0.0005,
            density:1
        }
        this.ball=Bodies.rectangle(x,y,r,r,options);
        this.image=loadImage("ball.png");
        this.radius=r;
        World.add(myWorld,this.ball);
    }
    display(){
        var pos=this.ball.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.ball.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
