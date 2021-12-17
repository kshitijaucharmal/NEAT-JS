class GeneH{
  constructor(inputs, outputs){
    this.inputs = inputs;
    this.outputs = outputs;
    this.global_inno = 0;
    this.allGenes = []
  }

  exists(n1, n2){
    if(this.allGenes.length == 0) return null;

    for(let i = 0; i < this.allGenes.length; i++){
      let g = this.allGenes[i];
      if(g.in_node.number == n1.number && g.out_node.number == n2.number){
        return g;
      }
    }
    return null;
  }
}
