class Rope{
    constructor(bodyA,pointB){
        

        var options = {
            bodyA:bodyA,
            
           
            pointB:pointB

        }
        this.pointB = pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    fly(){

        this.bodyA = null;

 }
     
   

    display(){
       
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
 
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}