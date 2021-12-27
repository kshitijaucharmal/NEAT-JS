class Gene{
  constructor(i, o){
    this.in_node = i;
    this.out_node = o;
    this.inno = -1;
    this.weight = random(-1, 1);
    this.enabled = true;
  }

  clone(){
    let g = new Gene(this.in_node.clone(), this.out_node.clone())
    g.weight = this.weight;
    g.enabled = this.enabled;
    g.inno = this.inno;
    return g;
  }

  printGene(){
    console.log(this.inno+'] '+
    this.in_node.number + '(' + this.in_node.layer + ')', '->',
    this.out_node.number + '(' + this.out_node.layer + ')',
    this.weight, this.enabled);
  }

  showGene(){
    let s = (this.inno+'] '+
    this.in_node.number + '(' + this.in_node.layer + ')' + ' -> ' +
    this.out_node.number + '(' + this.out_node.layer + ') ' +
    this.weight + " " + this.enabled + "\n");

    return s;
  }

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
