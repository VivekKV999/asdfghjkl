class Monster {
    constructor(x,y,r){
        var options={
            isStatic: true,
            density: 1,
            frictionAir:0

        }
        this.body=Bodies.rectangle(x,y,r,r,options)
        this.r=r;
        this.image=loadImage("Monster-01.png","Monster-02.png");
        
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        
        imageMode(RADIUS)
        
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}
