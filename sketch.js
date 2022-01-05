
let gh;
let g;

let ins = [];
let list_pos;
let scroll_speed = 10;

function setup(){
  let myCanvas = createCanvas(500, 500);
  myCanvas.parent("GameCanvas")

  list_pos = createVector(width/2, height/2);

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
      g.showGenome(col, list_pos);
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

function mouseWheel(event){
    if(event.delta < 0){
        list_pos.y += scroll_speed;
    }
    else if (event.delta > 0){
        list_pos.y -= scroll_speed;
    }
}
