class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }

  display(){
    var state = 1;

    if(this.body.speed <= 3 && state === 1){
      super.display();
      state = 2;
    }
    if(this.body.speed > 3 && state === 2){
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 1;
      tint(255,this.visibility);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }

  score(){
    if(this.visiblity < 0 && this.visiblity > -105){
      score++;
    }
  }
};