class Hammer {

    constructor(){
    var option = {'restitution' : 0.5,
    'friction': 1.0,
    'density': 2 }
        this.body=Bodies.rectangle(mouseX,mouseY,0,0,option);
        World.add(world,this.body);
        this.width = 160;
        this.height = 40;
    }
    display (){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow")
        rect(mouseX,mouseY,this.width,this.height);
        pop(); 
    }

}