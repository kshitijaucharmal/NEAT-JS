
let gh;
let g;

let ins = [];

function setup(){
  createCanvas(500, 500);
  gh = new GeneH();
  g = new Genome(gh);
  for(let i = 0; i< 4; i++){
      ins.push(random(-1, 1));
  }
}

function draw(){
  background(255);
  g.show();
  g.showGenome();
}

function keyPressed(){
  if(key == 'c'){
    g.add_gene();
  }

  if(key == 'n'){
      g.add_node();
  }

  if(key == 'q'){
      console.log(g.calculate_outputs(ins));
  }
}
