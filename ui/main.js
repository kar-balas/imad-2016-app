console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value from localhost";
var img = document.getElementById('madi');
var marginLeft=0;
var i;
function  moveRight(){
    marginLeft=marginLeft+5;
 img.style.marginLeft = marginLeft +'px';   
    
}

 img.onclick = function(){
     
   var interval =  setInterval(moveRight,50);
};

var ctrbutton=element.getElementById('ctrBtn');
counter=0;
ctrbutton.onclick = function(){
    counter+=1;
 element=document.getElementById('counter');   
 element.innerHTML=counter.toString();
}

