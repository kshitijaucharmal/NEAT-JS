
let gh;
let g;

function setup(){
  createCanvas(500, 500);
  gh = new GeneH(4, 2);
  g = new Genome(gh);
}

function draw(){
  background(51);
  g.showGenome();
}

function keyPressed(){
  if(key == 'c'){
    g.add_gene();
  }
}
