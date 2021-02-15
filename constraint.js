class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:275,
            stiffness: 0.3
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    attach(body) {
        this.body.bodyA = body;
      }
    
      fly() {
        this.body.bodyA = null;
      }

    display(){
        if(this.body.bodyA!=null){
        push();
        stroke("white")
        strokeWeight(5)
        //line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y)
        pop();
    }
}
}