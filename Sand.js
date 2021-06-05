class Sand {

    constructor(x){
    var option = {'restitution' : 0.8,
    'friction': 1.0,
    'density': 5 }
        this.body=Bodies.circle(x,50,10,option);
        World.add(world,this.body)  ;
        this.width = 20;

    }
    display (){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        ellipse(0,0,this.width);
        pop();     
    }
    }