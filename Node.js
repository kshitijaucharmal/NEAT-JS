class Node{
  constructor(n, l){
    this.number = n;
    this.layer = l;
    this.sum = 0
    this.outputValue = 0
    this.inGenes = []

    // for showing
    this.pos = createVector(0, 0);
  }

  clone(){
    let n = new Node(this.number, this.layer);
    n.sum = this.sum;
    n.outputValue = this.outputValue;
    return n;
  }
}
