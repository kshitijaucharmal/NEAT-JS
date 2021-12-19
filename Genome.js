class Genome{
  constructor(gh){
    this.gh = gh;
    this.inputs = gh.inputs;
    this.outputs = gh.outputs;
    this.total_nodes = 0
    this.highest_inno = 0;
    this.input_layer = 0;
    this.output_layer = 0;
    this.nodes = [];
    this.genes = [];

    if(this.input_layer == this.output_layer){
      this.output_layer = this.input_layer + 10;
    }

    for(let i = 0; i < this.inputs; i++){
      this.nodes.push(new Node(this.total_nodes++, this.input_layer));
    }
    for(let i = 0; i < this.outputs; i++){
      this.nodes.push(new Node(this.total_nodes++, this.output_layer));
    }
  }

  exists(x){
    for(let i = 0; i < this.genes.length; i++){
      if(x.inno == this.genes[i].inno){
        return true;
      }
    }
    return false;
  }

  connect_nodes(n1, n2){
    if(n1.layer > n2.layer){
      let temp = n1;
      n1 = n2;
      n2 = temp;
    }

    let c = this.gh.exists(n1, n2);
    let x = new Gene(n1, n2);

    if(c != null){
      x.inno = c.inno;
      if(!this.exists(x)){
        this.genes.push(x);
        n1.inGenes.push(x);
      }
    }
    else{
      x.inno = this.gh.global_inno++;
      this.gh.allGenes.push(x.clone());
      this.genes.push(x);
      n2.inGenes.push(x);
    }
  }

  add_gene(){
    let n1 = this.nodes[int(random(this.nodes.length))];
    let n2 = this.nodes[int(random(this.nodes.length))];

    while (n1.layer == n2.layer){
      n1 = this.nodes[int(random(this.nodes.length))];
      n2 = this.nodes[int(random(this.nodes.length))];
    }

    this.connect_nodes(n1, n2);
  }

  printGenome(){
    console.log("--------------------------------------------------");
    for(let i = 0; i < this.genes.length; i++){
      this.genes[i].printGene();
    }
    console.log("--------------------------------------------------");
  }

  showGenome(){
    let s = "Genome\n--------------------------------------------------\n";
    for(let i = 0; i < this.genes.length; i++){
      s += this.genes[i].showGene();
    }
    s += "--------------------------------------------------";

    push();
    fill(255);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(s, width/2, height/2);
    pop();
  }
}
