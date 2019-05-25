var x,y,z,get1,get2,get3,get4;
function calculator1(weight){
	
	x=66+(6.23*weight);
}
function calculator2(height){
	
    y=x+(12.7*height);
}
function calculator3(age){
	z=y-(6.8*age);

}
function calculator(){
	document.getElementById("req").innerHTML=z;
}

function getselect1(){
	var get1=document.getElementById("morn").value;
	document.getElementById("morning").innerHTML=get1;
}

function getselect2(){
	var get2=document.getElementById("aftr").value;
	document.getElementById("afternoon").innerHTML=get2;
}


function getselect3(){
	var get3=document.getElementById("nght").value;
    document.getElementById("night").innerHTML=get3;
}
function getselect4(){
	
	document.getElementById("overall").innerHTML=get4;

}
