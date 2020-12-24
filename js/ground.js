class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
       World.add(myWorld,this.ground);
    }
    display(){
        var pos=this.ground.position;
        push();
        stroke(210,105,30);
        strokeWeight(3);
        fill(139,69,19);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}