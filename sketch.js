var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400,400);
  btn_red = createButton("RED");                                  
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);


  btn_green = createButton("GREEN");                                  
  btn_green.position(100,50);
  btn_green.mousePressed(green_bg);
}

function draw() 
{
  background(r,g,b);
}


function red_bg()
{
r = 255;
g = 0;
b = 0;
}
  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  function green_bg()
{
r = 0;
g = 255;
b = 0;
}

  