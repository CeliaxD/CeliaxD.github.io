let bg;
let weed=[];

function preload() {
  bg = loadImage('BG.png');
  gif_A = createImg("OG.gif");
  gif_B = createImg("PK.gif");
  gif_C = createImg("PL.gif");
  gif_D = createImg("Small.gif");
  gif_E = createImg("Whale.gif");
  
  for(i=0; i<6; i++){
    weed[i] = createImg("weed.gif");
  }

}

function setup() {
  
  createCanvas(1800, 840);
  background(bg);
}

function draw() {
   
  gif_A.position(950,800);
  gif_B.position(1100,800);
  gif_C.position(1350,800);
  gif_D.position(0,840);
  gif_E.position(1300,300);

  for(i=0; i<6; i++){
    for(x=0; x<width; x+=200){
      weed[i].position(x,620);
    }
  }


  
}