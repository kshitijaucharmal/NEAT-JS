// Node Class

class Node{
  constructor(n, l){
    this.number = n; // number to identify node
    this.layer = l; // layer
    this.sum = 0; // total sum of weights
    this.outputValue = 0; // output value to pass on
    this.lastOutputValue = 0; // clone of output value for showing
    this.inGenes = []; // all genes entering this node
    this.globals = new globals(); // global config

    this.pos = createVector(); // for showing

    this.config(); // configure
  }

  config(){
    // variables for showing on screen
    let startx = 50;
    let endx = width - startx;
    let starty = 100;
    let endy = height - starty;
    let gapx = (endx - startx) / (this.globals.input_layer + this.globals.output_layer);
    let gapy = 100;

    // Showing Stuff on Screen
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

  // Actual Calculations happen here
  calculate(){
    // Return if on the input layer
    if(this.layer == this.globals.input_layer){
      return;
    }

    for(let i = 0; i < this.inGenes.length; i++){
      if(this.inGenes[i].enabled)
        this.sum += this.inGenes[i].in_node.outputValue * this.inGenes[i].weight; //Calculating sum
    }
    this.outputValue = this.activate(this.sum); // Activate
    this.lastOutputValue = this.outputValue; // for showing on screen
  }

  // Activation function (sigmoid)
  activate(x){
    return 1 / ( 1 + exp(-x));
  }

  // Show on screen
  show(){
    push();
    stroke(0);
    // strokeWeight(2);
    fill(map(this.lastOutputValue, 0, 1, 255, 0), 255, 255);
    circle(this.pos.x, this.pos.y, 22);
    noStroke();
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(15);
    text(this.number, this.pos.x, this.pos.y);
    textSize(10);
    text(this.lastOutputValue.toFixed(4), this.pos.x, this.pos.y + 22);
    pop();
  }

  // Reset values after each pass
  reset(){
    this.outputValue = 0;
    this.sum = 0;
  }

  // Make a clone
  clone(){
    let n = new Node(this.number, this.layer);
    n.sum = this.sum;
    n.outputValue = this.outputValue;
    return n;
  }
}
