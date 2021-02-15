class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution :0.8,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER)
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        stroke("blue")
        strokeWeight(5)
        fill("green")
        rect(0,0,this.width,this.height)
        pop();
    }
}