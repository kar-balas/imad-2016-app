// create a request
//
//make a request
//execute what u want to do
var ctr =0;
var ctrButton=document.getElementById('ctrBtn');
ctrButton.onclick=function(){
ctr += 1;
var element=document.getElementById('counter');
console.log("incremented value is:");
console.log(ctr);
element.innerHTML=ctr.toString();
console.log("inner html is:");
console.log(element.innerHTML);
    
};

ctr=ctr+1;
