class slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:5,
        stiffness: 0.01
    }
    this.pointB=pointB;

    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");

this.sling=Constraint.create(options);
World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null 
}
display(){
    image(this.sling1,200,40);
    image(this.sling2,170,40);

    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;

    strokeWeight(5);
    stroke(48,22,8);

    if(pointA.x>220){
    line(pointA.x-30,pointA.y,pointB.x+30,pointB.y+10)
    line(pointA.x-20,pointA.y,pointB.x-20,pointB.y+10)
    image(this.sling3,pointA.x+20,pointA.y-10,15,30);
    }
  else{
    line(pointA.x+20,pointA.y,pointB.x+20,pointB.y+10)
    line(pointA.x-20,pointA.y,pointB.x-20,pointB.y+15)
    image(this.sling3,pointA.x-20,pointA.y-10,15,30);
}
}
}
}