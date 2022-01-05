// Most important class of all
// Stores all nodes and genes
// performs mutation, cloning, speiciation, showing on screen etc.

class Genome{
  constructor(gh){
    this.gh = gh; // Referece to the history
    this.inputs = gh.inputs; // no. inputs
    this.outputs = gh.outputs; // no. outputs
    this.total_nodes = 0; // total nodes in model
    this.highest_inno = 0; // highest inno
    this.nodes = []; // array of all nodes
    this.genes = []; // array of all genes
    this.globals = new globals(); // globals 

    // Init input layer
    for(let i = 0; i < this.inputs; i++){
      this.nodes.push(new Node(this.total_nodes++, this.globals.input_layer));
    }
    // Init output layer
    for(let i = 0; i < this.outputs; i++){
      this.nodes.push(new Node(this.total_nodes++, this.globals.output_layer));
    }
  }

  // Check if a gene exists in model
  exists(x){
    for(let i = 0; i < this.genes.length; i++){
      if(x.inno == this.genes[i].inno){
        return true;
      }
    }
    return false;
  }

  // Connect two nodes by adding a gene
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

  // give outputs (reason for all this)
  calculate_outputs(inputs){
    if(inputs.length != this.globals.inputs){
      console.log("Wrong length in[uts]");
      return;
    }

    for(let i = 0; i< this.globals.inputs; i++){
      this.nodes[i].outputValue = inputs[i];
      this.nodes[i].lastOutputValue = inputs[i];
    }
    let outs = [];

    for(let i = this.globals.inputs+this.globals.outputs; i < this.nodes.length; i++){
      this.nodes[i].calculate();
    }

    for(let i = this.globals.inputs; i < this.globals.inputs+this.globals.outputs; i++){
      this.nodes[i].calculate();
      outs.push(this.nodes[i].outputValue);
    }

    for(let i = 0; i < this.nodes.length; i++){
      this.nodes[i].reset();
    }
    return outs;
  }

  // Add a new Gene
  add_gene(){
    let n1 = this.nodes[int(random(this.nodes.length))];
    let n2 = this.nodes[int(random(this.nodes.length))];

    while (n1.layer == n2.layer){
      n1 = this.nodes[int(random(this.nodes.length))];
      n2 = this.nodes[int(random(this.nodes.length))];
    }

    this.connect_nodes(n1, n2);
  }

  // Add a new node
  add_node(){
    if(this.genes.length == 0) this.add_gene();

    let n = new Node(this.total_nodes++, int(random(this.globals.input_layer+1, this.globals.output_layer)));
    let g = this.genes[int(random(this.genes.length))];

    this.connect_nodes(g.in_node, n);
    this.connect_nodes(n, g.out_node);

    this.genes[this.genes.length - 1].weight = g.weight;
    this.genes[this.genes.length - 2].weight = 1;
    g.enabled = false;

    this.nodes.push(n);
  }

  // print the genome in the console
  printGenome(){
    console.log("--------------------------------------------------");
    for(let i = 0; i < this.genes.length; i++){
      this.genes[i].printGene();
    }
    console.log("--------------------------------------------------");
  }

  // Show everything as a list
  showGenome(col, list_pos){
    let s = "Genome\n--------------------------------------------------\n";
    for(let i = 0; i < this.genes.length; i++){
      s += this.genes[i].showGene();
    }
    s += "--------------------------------------------------";

    push();
    rect(width/5, 0, 3*(width/5), height);
    fill(col);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(s, list_pos.x, list_pos.y);
    pop();
  }

  // show everything on screen
  show(show_disabled){
    for(let i = 0; i < this.genes.length; i++){
      this.genes[i].show(show_disabled);
    }
    for(let i = 0; i < this.nodes.length; i++){
      this.nodes[i].show();
    }
  }
}
