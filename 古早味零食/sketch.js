

let imaLobby;
let song;
let test = []; //臨時圖片
let MC = [];
let LDG = [];
let BB = [];
let speedMC = 0;
let light = 400;
let open = false;
let MCmove = false;
let LDG_total = 0;
let rot = 0;
let MCSuckTime = 0;
let bbPlay = false;
let bbDraw = 0;
let bbLine = 0;

function preload(){
  soundFormats('mp3');
  song = loadSound('childmusic.mp3');
  loadImage('LDG_0.png');
  test[0] =loadImage('MDG.png');
  test[1] = loadImage('binhua.png'); //秉樺
  loadImage('JGT.png');
  imaLobby = loadImage('lobby.png');

  MC[1] = loadImage('miencha.png');
  MC[2] = loadImage('MC_title.png');
  MC[3] = loadImage('MC_stop.png');
  MC[4] = loadImage('MC_suck.png');
  MC[5] = loadImage('MC_cough.png');

  LDG[1] = loadImage('LDG.png');
  LDG[2] = loadImage('LDG_1.png');
  LDG[3] = loadImage('LDG_W.png');
  LDG[4] = loadImage('LDG_TKU.png');
  LDG[5] = loadImage('LDG_B.png');
  LDG[6] = loadImage('LDG_R.png');
  LDG[7] = loadImage('LDG_LDG.png');
  LDG[8] = loadImage('LDG_LDG2.png');
  LDG[9] = loadImage('LDG_rotate.png');
  LDG[10] = loadImage('LDG_title.png');

  BB[0] = loadImage('BB_title.png');
  BB[1] = loadImage('BB.png');
  BB[2] = loadImage('BB_Pink.png');
  BB[3] = loadImage('BB_B.png');
  BB[4] = loadImage('BB_G.png');
  BB[5] = loadImage('BB_O.png');
  BB[6] = loadImage('BB_P.png');
  BB[7] = loadImage('BB_Y.png');
  BB[8] = loadSound('01.mp3');
  BB[9] = loadSound('02.mp3');
  BB[10] = loadSound('03.mp3');
  BB[11] = loadSound('04.mp3');
  BB[12] = loadSound('05.mp3');
  BB[13] = loadSound('06.mp3');

}

var LDG_like = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  for (let x = width/2-120; x<width/2+140; x+=70){
  LDG_like[x] = [];
  }
  song.setVolume(0.2);


  Z();
}



var button1;
var button2;
var button3;
var buttonLobby;
var buttonBH;

var buttonBB;
var buttonBB_Pink;
var buttonBB_Blue;
var buttonBB_G;
var buttonBB_O;
var buttonBB_P;
var buttonBB_Y;

function draw(){

  if(open === true){
    if(LDG_total >>> 0 ){
      rot += 0.2;
      translate(width/2,height/2-200);
      rotate(rot);
      image(LDG[9],0,0);

    }
    rotate(-rot);
    translate(-width/2,-height/2+200);

    if(LDG_total === 3){

      image(LDG[7],width/2-150,height/2-200);
      image(LDG[8],width/2,height/2-200);
      image(LDG[7],width/2+150,height/2-200);
    }
    if(LDG_total === 2){

      image(LDG[8],width/2,height/2-200);
    }
    if(LDG_total === 1){

      image(LDG[7],width/2,height/2-200);
    }
  }

  if(MCmove === true){
    background(200+MCSuckTime,0,150-MCSuckTime);
    
    if(speedMC > width){
      speedMC = 4;
      
    }
    for (let x = -800; x<3000; x+=200){
      for (let y = 200; y<height; y+=400){
          image(MC[1],x+speedMC/2,y);
      } 
    } 
    if(mouseIsPressed === true){
      image(MC[4],width/2,height/2);
      speedMC = speedMC + 10;
      MCSuckTime += 1;
      if(MCSuckTime >= 120){
        background(250,0,0);
        image(MC[5],width/2,height/2);
        speedMC = speedMC + 0;

      }
    }else{
      MCSuckTime = 0;
      image(MC[3],width/2,height/2);
      speedMC = speedMC + 0;
    }

  }
  if(bbPlay === true){
    if(bbDraw === 2){
      image(BB[2],100+bbLine,height/2+200,50,50)
    }
    if(bbDraw === 3){
      image(BB[3],100+bbLine,height/2+200,50,50)
    }
    if(bbDraw === 4){
      image(BB[4],100+bbLine,height/2+200,50,50)
    }
    if(bbDraw === 5){
      image(BB[5],100+bbLine,height/2+200,50,50)
    }
    if(bbDraw === 6){
      image(BB[6],100+bbLine,height/2+200,50,50)
    }
    if(bbDraw === 7){
      image(BB[7],100+bbLine,height/2+200,50,50)
    }
    if(bbLine >= width-280){
      buttonBB_Pink.hide();
      buttonBB_Blue.hide();
      buttonBB_G.hide();
      buttonBB_O.hide();
      buttonBB_P.hide();
      buttonBB_Y.hide();

      image(BB[2],width/2-(125*5),height/2);
      image(BB[3],width/2-(125*3),height/2);
      image(BB[4],width/2-(125*1),height/2);
      image(BB[5],width/2+(125*1),height/2);
      image(BB[6],width/2+(125*3),height/2);
      image(BB[7],width/2+(125*5),height/2);

      bbLine = 60;
      background(0,100);
      textSize(32);
      fill(255);
      text('好吵', width/2 ,height/2-150);
      bbPlay = false;


    }
  }

}

function Z(){  
  song.play();
  buttonLobby = createImg('JGT.png');
  buttonLobby.position(width-150,20);
  buttonLobby.mousePressed(lobby);

  for (let x = width/2-120; x<width/2+140; x+=70){
    for (let y = height/2+90; y<height/2+220; y+=40){
  LDG_like[x][y] = createImg('LDG_1.png');
    }
  }

  buttonBB = createImg('BB.png');
  buttonBB.position(width/2-350,height/2-367.5);
  buttonBB.mousePressed(b);
  
  buttonBB_Pink = createImg('BB_Pink.png');
  buttonBB_Pink.position(width/2-(125*6),height/2-125);
  buttonBB_Pink.mousePressed(b_pink);

  buttonBB_Blue = createImg('BB_B.png');
  buttonBB_Blue.position(width/2-(125*2),height/2-125);
  buttonBB_Blue.mousePressed(b_b);

  buttonBB_G = createImg('BB_G.png');
  buttonBB_G.position(width/2-(125*4),height/2-125);
  buttonBB_G.mousePressed(b_g);

  buttonBB_O = createImg('BB_O.png');
  buttonBB_O.position(width/2+(125*0),height/2-125);
  buttonBB_O.mousePressed(b_o);

  buttonBB_P = createImg('BB_P.png');
  buttonBB_P.position(width/2+(125*2),height/2-125);
  buttonBB_P.mousePressed(b_p);

  buttonBB_Y = createImg('BB_Y.png');
  buttonBB_Y.position(width/2+(125*4),height/2-125);
  buttonBB_Y.mousePressed(b_y);

  lobby();
}


function lobby() {

  open = false;
  MCmove = false;
  bbPlay = false;
  LDG_total = 0;

  buttonLobby.hide();
  for (let x = width/2-120; x<width/2+140; x+=70){
    for (let y = height/2+90; y<height/2+220; y+=40){
  LDG_like[x][y].hide();
    }
  }
  buttonBB.hide();
  buttonBB_Pink.hide();
  buttonBB_Blue.hide();
  buttonBB_G.hide();
  buttonBB_O.hide();
  buttonBB_P.hide();
  buttonBB_Y.hide();

  imageMode(CORNERS);
  image(imaLobby,0,0,width,height);
  imageMode(CENTER);

  button1 = createImg('LDG_title.png');
  button1.position(width/4-150, height/2-100);
  button1.mousePressed(A);
  
  button2 = createImg('BB_title.png');
  button2.position(width/2-150,height/2-70);
  button2.mousePressed(B);

  button3 = createImg('MC_title.png');
  button3.position(width/5*3, height/2-100);
  button3.mousePressed(C);
  
  buttonBH = createImg('MDG.png');
  buttonBH.position(80,height-100);
  buttonBH.mousePressed(D);


}


function A() {
 
  button1.hide();
  button2.hide();
  button3.hide();
  buttonBH.hide();
  background(0,114,192);
  buttonLobby.show();
  

  image(LDG[1],width/2,height/2);
  a();

  } 

function a() {
  for (let x = width/2-120; x<width/2+140; x+=70){
    for (let y = height/2+90; y<height/2+220; y+=40){
      LDG_like[x][y] = createImg('LDG_1.png');
      LDG_like[x][y].position(x,y);
      LDG_like[x][y].mousePressed(aa);
    } 
}
}
function aa(){

  let a= mouseX-(mouseX-(width/2-120))%70;
  let b= mouseY-(mouseY-(height/2+90))%40;
  for (let x = width/2-120; x<width/2+140; x+=70){
    for (let y = height/2+90; y<height/2+220; y+=40){
      LDG_like[x][y].hide();
      image(LDG[2],x+42.5,y+27);
    }
  }
  background(50,20,20,180);
  image(LDG[2],a+42.5,b+27);
  light = 400
  open = true
  let D = random(0,12);

  if(D >= 11){
    LDG_total = 3;
    image(LDG[6],mouseX,mouseY);
  }
  else if(D>= 9 & D < 11){
    LDG_total = 2;
    image(LDG[5],mouseX,mouseY);
  }
  else if(D>= 4 & D < 9){
    LDG_total = 1;
    image(LDG[3],mouseX-80,mouseY);
  }
  else {
    image(LDG[4],mouseX,mouseY);
    LDG_total = 0;
    open = false
  }
}

function B() {
  bbDraw = 0;
  bbLine = 0;

  button1.hide();
  button2.hide();
  button3.hide();
  buttonBH.hide();
  background(140,20,180);
  buttonLobby.show();

  buttonBB.show();

}
function b(){
  buttonBB.hide();
  image(BB[1],width/2,height/2);
  bbPlay = true;

  background(80,60,120,150); //點按後ㄉ背景色
  buttonBB_Pink.show();
  buttonBB_Blue.show();
  buttonBB_G.show();
  buttonBB_O.show();
  buttonBB_P.show();
  buttonBB_Y.show();
}

function b_pink(){
  BB[11].play();
  BB[8].stop();
  BB[9].stop();
  BB[10].stop();
  BB[12].stop();
  BB[13].stop();
  bbDraw = 2;
  bbLine += 60;
}
function b_b(){
  BB[9].play();
  BB[11].stop();
  BB[8].stop();
  BB[10].stop();
  BB[12].stop();
  BB[13].stop();
  bbDraw = 3;
  bbLine += 60;
}
function b_g(){
  BB[10].play();
  BB[11].stop();
  BB[8].stop();
  BB[9].stop();
  BB[12].stop();
  BB[13].stop();
  bbDraw = 4;
  bbLine += 60;
}

function b_o(){
  BB[8].play(); //這個是正解
  BB[11].stop();
  BB[9].stop();
  BB[10].stop();
  BB[12].stop();
  BB[13].stop();
  bbDraw = 5;
  bbLine += 60;
}

function b_p(){
  BB[12].play();
  BB[11].stop();
  BB[8].stop();
  BB[9].stop();
  BB[10].stop();
  BB[13].stop();
  bbDraw = 6;
  bbLine += 60;
}

function b_y(){
  BB[13].play();
  BB[11].stop();
  BB[8].stop();
  BB[9].stop();
  BB[10].stop();
  BB[12].stop();
  bbDraw = 7;
  bbLine += 60;
}



function C() {
  MCmove = true;
  button1.hide();
  button2.hide();
  button3.hide();
  buttonBH.hide();
  buttonLobby.show();
}

function D() {

  button1.hide();
  button2.hide();
  button3.hide();
  buttonBH.hide();
  background(255,200);
  buttonLobby.show();

  textSize(32);
  fill(0);
  text('工作人員', width/2 ,height/2-200);
  textSize(24);
  text('李玫樹', width/2 ,height/2-150);
  text('黃鈺婷', width/2 ,height/2-100);
  text('黃趙德儀', width/2 ,height/2-50);
  textSize(32);
  text('特別感謝', width/2 ,height/2+120);
  textSize(24);
  text('簡安廷 同學', width/2 ,height/2+170);
  text('萬華火車站a柑仔店', width/2 ,height/2+220);

}

function display(){

}
