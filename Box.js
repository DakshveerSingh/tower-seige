class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }

  display(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visyibility - 5;
      tint(255,this.visibility);
      rect(0,0,this.width,this.height);
      pop();
    }
  }
};
