
let gh;
let g;

let ins = [];

function setup(){
  let myCanvas = createCanvas(500, 500);
  myCanvas.parent("GameCanvas")
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
