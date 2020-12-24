class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.5,
            density:0.04
        }
        this.box=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.visibility=255;
        this.image=loadImage("brick.png");
        World.add(myWorld,this.box);
    }
    display(){
        console.log(this.box.speed);
        var pos=this.box.position;
        if(this.box.speed<15){
            push();
            translate(pos.x,pos.y);
            rotate(this.box.angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(myWorld,this.box);
            var pos=this.box.position;
            push();
            this.visibility-=8;
            tint(255,this.visibility);
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
            pop();
        }
    }
}