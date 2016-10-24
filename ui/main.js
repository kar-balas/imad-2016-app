console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value";
var img = document.getElementById('madi');
var marginleft=0;
function  moveright(){
    marginleft=marginleft+10;
 img.style.marginLeft = marginleft +'px';   
    
}

 img.onclick = function(){
   var interval =  setinterval(moveright,100);
 
};