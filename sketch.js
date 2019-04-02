let bar=[];	let lenChg;
function setup(){
	start();lenChg=20;
	can=createCanvas(800,600,WEBGL);
	can.position(25,25);can.class("bdd");
    b1=new boxes(10);
	frameRate(5);
	for(let j=0;j<10;j++){
		bar.push(new boxes(20));
	}}
	
	let ang=0;

	function draw(){
	background(100,220,100);

	
	for(let j=0;j<10;j++){push();rotateX(ang+36*j);
	translate(-300,0,-200);bar[j].rX(lenChg);pop();
	}
ang+=5;
}