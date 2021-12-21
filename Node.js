class Node{
  constructor(n, l){
    this.number = n;
    this.layer = l;
    this.sum = 0
    this.outputValue = 0
    this.inGenes = []
    this.globals = new globals();

    // for showing
    this.pos = createVector();

    this.config();
  }

  config(){
      let startx = 50;
      let endx = width - startx;
      let starty = 100;
      let endy = height - starty;
      let gapx = (endx - startx) / (this.globals.input_layer + this.globals.output_layer);
      let gapy = 100;

      if (this.layer == this.globals.input_layer){
          this.pos.x = startx;
          this.pos.y = this.number * starty + gapy;
      }
      else if (this.layer == this.globals.output_layer){
          this.pos.x = endx;
          this.pos.y = (this.number - this.globals.inputs) * starty + gapy;
      }
      else{
          this.pos.x = this.layer * gapx + startx;
          this.pos.y = random(starty, endy);
      }
  }

  show(){
      push();
      stroke(0);
      strokeWeight(2);
      fill(255);
      circle(this.pos.x, this.pos.y, 22);
      noStroke();
      fill(0);
      textAlign(CENTER,CENTER);
      textSize(15);
      text(this.layer, this.pos.x, this.pos.y);
      pop();
  }

  clone(){
    let n = new Node(this.number, this.layer);
    n.sum = this.sum;
    n.outputValue = this.outputValue;
    return n;
  }
}
