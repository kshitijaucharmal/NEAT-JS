// Gene (Connection) Class
// This class connects the nodes and has the weights

class Gene{
  constructor(i, o){
    this.in_node = i; // Input Node
    this.out_node = o; // Output node
    this.inno = -1; // Innovation number 
    this.weight = random(-1, 1); // Weight of gene
    this.enabled = true; // Enabled by default
  }

  // Clone The Gene
  clone(){
    let g = new Gene(this.in_node.clone(), this.out_node.clone())
    g.weight = this.weight;
    g.enabled = this.enabled;
    g.inno = this.inno;
    return g;
  }

  // For Printing to the console
  printGene(){
    console.log(this.inno+'] '+
    this.in_node.number + '(' + this.in_node.layer + ')', '->',
    this.out_node.number + '(' + this.out_node.layer + ')',
    this.weight, this.enabled);
  }

  // For showing gene in list
  showGene(){
    let s = (this.inno+'] '+
    this.in_node.number + '(' + this.in_node.layer + ')' + ' -> ' +
    this.out_node.number + '(' + this.out_node.layer + ') ' +
    this.weight + " " + this.enabled + "\n");

    return s;
  }

  // Show Gene On Screen
  show(show_disabled){
    push();
    strokeWeight(abs(this.weight) * 4);
    if(this.enabled){
      if(this.weight < 0) stroke(0, 0, 255);
      else stroke(255, 0, 0);
    }
    else{
      if(show_disabled) stroke(0, 255, 0);
      else noStroke();
    }
    line(this.in_node.pos.x, this.in_node.pos.y, this.out_node.pos.x, this.out_node.pos.y);
    pop();
  }
}
