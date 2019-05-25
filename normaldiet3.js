var x,y,z,get1,get2,get3,get4,a,b,c,d;
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
	get1=document.getElementById("morn").value;
	document.getElementById("morning").innerHTML=get1;
	 a=parseInt(get1);
}

function getselect2(){
	get2=document.getElementById("aftr").value;
	document.getElementById("afternoon").innerHTML=get2;
	b=parseInt(get2);
}


function getselect3(){
	get3=document.getElementById("nght").value;
    document.getElementById("night").innerHTML=get3;
    c=parseInt(get3);
}
function getselect4(){
	get4=a+b+c;
	document.getElementById("overall").innerHTML=get4;
    d=parseInt(get4);
}
function limit(dailyneed){
	
    var j=parseInt(dailyneed);
    if(j>d)
    {
    	document.getElementById("empty").innerHTML="You are Exceeding the calorie limit";
    }
    if(j<d)
    {
    	document.getElementById("empty").innerHTML="You are at low calorie limit";
    }
    else
    {
    	document.getElementById("empty").innerHTML="You are at safe zone";
    }
}
