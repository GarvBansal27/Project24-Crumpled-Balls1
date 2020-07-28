class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':0
      }
      this.rectangle = Bodies.rect(x, y, width, height, options);
      this.width= width;
      this.height=height;
      
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(x, y, this.width, this.height, options);
      pop();
    }
  };