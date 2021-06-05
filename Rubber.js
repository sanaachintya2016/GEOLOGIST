class Rubber {

    constructor(){
    var option = {'restitution' : 0.3,
    'friction': 5.0,
    'density': 1 }
        this.body=Bodies.circle(600,80,40,option);
        World.add(world,this.body)  ;
        this.width = 80;

    }
    display (){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        ellipse(0,0,this.width);
        pop();     
    }
    }