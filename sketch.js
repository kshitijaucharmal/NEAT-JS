
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
  g.show(f.show_disabled.checked);

  // settings
  if(f.show_list.checked){
      col = 0;
      g.showGenome(col);
  }
}

function give_outputs(){
    g.calculate_outputs(ins);
}

function add_gene(){
    g.add_gene();
    g.calculate_outputs(ins);
}

function add_node(){
    g.add_node();
    g.calculate_outputs(ins);
}

function keyPressed(){
  if(key == 'c'){
      g.add_gene();
      g.calculate_outputs(ins);
  }

  if(key == 'n'){
      g.add_node();
      g.calculate_outputs(ins);
  }

  if(key == 'q'){
      console.log(g.calculate_outputs(ins));
  }
}
