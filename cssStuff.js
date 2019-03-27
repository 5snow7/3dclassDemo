let rad;let par;let anch1;
let c;let count=0;let sl,parSl;
function start(){
c=color(250,0,250);
par=select('#p1');par.position(900,270);par.style('font-size','12px');
par.mousePressed(chgfont);
rad=createRadio();rad.class('parbdd');
anch1=select('#a1');anch1.position(900,400);
rad.position(900,50);
rad.option('yellow',1);	
rad.option('restart',2);
rad.option('chgradius',3);
rad.changed(addColor);	
parSl=createP('change the size');parSl.id('cont');
parSl.class('parbdd');parSl.position(900,150);
sl=createSlider(5,50,25,1);
sl.changed(chglen);//sl.position(900,250);
sl.parent('cont');
}
function addColor(){
if(rad.value()){
	if(rad.value()=='1'){c=color(250,250,0);}
	if(rad.value()=='2'){setup();}
    if(rad.value()=='3'){lenChg=40;c=color(0,250,250);}
}
}

function chgfont(){
	if(count%2==0){par.style('font-size','24px');}
    if(count%2==1){par.style('font-size','12px');}
	count++;
}

function chglen(){
	lenChg=sl.value();
}