class Stone {

constructor(){
var option = {'restitution' : 0.8,
'friction': 1.0,
'density': 5 }
    this.body=Bodies.rectangle(50,50,90,30,option);
    World.add(world,this.body)  ;
    this.width = 90;
    this.height = 90;
}
display (){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black");
    rect(0,0,this.width,this.height);
    pop();     
}
}