// create a request
//var request=new XMLHttpRequest
//
//make a request





//execute what u want to do
console.log("Welcoome to main");
var ctr =0;
var ctrButton=document.getElementById('ctrBtn');
    console.log('Outside Button Click');
ctrButton.onclick=function(){
    console.log('Inside Button Click');
ctr += 1;
var element=document.getElementById('counter');
element.innerHTML=ctr.toString();
};
