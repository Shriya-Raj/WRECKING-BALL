class Rope{
    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point,
            stiffness:0.8,
            length:250
        }
        this.pointB=point;
        this.image=loadImage("chain.png");
        this.rope=Constraint.create(options);
        World.add(myWorld,this.rope);
    }
    
    display(){
        if(this.rope.bodyA){
            var posA=this.rope.bodyA.position;
            var posB=this.pointB;
            push();
            stroke("black");
            strokeWeight(6);
            line(posB.x,posB.y,posA.x,posA.y);
            pop();
        }
    }
  }