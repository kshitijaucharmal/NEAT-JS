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
}