song="";
function setup() 
{
canvas=createCanvas(700,600);
canvas.center();
Vi=createCapture(VIDEO);
vi.hide();
}
function draw() {
image(vi,0,0,700,600);
}
function preload() 
{
song=loadSound("music.mp3");
}

function play(){
    song.play();
}