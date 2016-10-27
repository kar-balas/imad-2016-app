// create a request
//var request=new XMLHttpRequest
//
//make a request





//execute what u want to do
var ctr =0;
var ctrButton=document.getElementById('ctrBtn');
ctrButton.onclick=function(){
ctr += 1;
var element=document.getElementById('counter');
element.innerHTML=ctr.toString();
};
