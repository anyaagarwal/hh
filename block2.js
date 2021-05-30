class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        strokeWeight(9.3)
        stroke(rgb(171,127,138));
        fill(rgb(255,247,230));
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
       
          }
        condition(){
             if(this.body.speed < 3){
            super.display();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             pop();
           }
        }
      
      }
  