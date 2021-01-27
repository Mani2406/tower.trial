class Polygon {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r);
      
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
   
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
     
      image(this.image, this.body.position.x, this.body.position.y,40,40);
    }
  };