
let gh;
let g;

function setup(){
  createCanvas(500, 500);
  gh = new GeneH();
  g = new Genome(gh);
}

function draw(){
  background(225);
  g.show();
}

function keyPressed(){
  if(key == 'c'){
    g.add_gene();
  }

  if(key == 'n'){
      g.add_node();
  }
}
