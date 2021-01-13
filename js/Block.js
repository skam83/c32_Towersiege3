class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        World.add(world, this.body);
      }

      score(){
        if(this.visibility<0 && this.visibility>-105){
          score++;
          console.log(this.visibility);
        }
      }

      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(pos.y<355){
          angleMode(RADIANS);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          this.visibility = this.visibility -5;
          //this.visibility does not affect rect. tint worksonly for images
          push();
          
          tint (this.visibility);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        
      }
}