class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution :0.8,
            friction : 0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("Superhero-01.png");
        World.add(world, this.body);
    }

    display(){
        imageMode(RADIUS)
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        stroke("blue")
        strokeWeight(5)
        fill("green")
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
}