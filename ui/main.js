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
element.innerHtml=ctr.toString();
    
};

ctr=ctr+1;
