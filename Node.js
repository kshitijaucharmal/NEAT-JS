class Node{
  constructor(n, l){
    this.number = n;
    this.layer = l;
    this.sum = 0
    this.outputValue = 0
    this.lastOutputValue = 0;
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

  calculate(){
      if(this.layer == this.globals.input_layer){
          return;
      }

      for(let i = 0; i < this.inGenes.length; i++){
          if(this.inGenes[i].enabled)
            this.sum += this.inGenes[i].in_node.outputValue * this.inGenes[i].weight;
      }
      this.outputValue = this.activate(this.sum).toFixed(4);
      this.lastOutputValue = this.outputValue;
  }

  activate(x){
      return 1 / ( 1 + exp(-x));
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
      textSize(10);
      text(this.lastOutputValue, this.pos.x, this.pos.y + 22);
      pop();
  }

  reset(){
      this.outputValue = 0;
      this.sum = 0;
  }

  clone(){
    let n = new Node(this.number, this.layer);
    n.sum = this.sum;
    n.outputValue = this.outputValue;
    return n;
  }
}
