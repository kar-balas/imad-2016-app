console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value";
var img = document.getElementById('madi');
var marginLeft=0;
function  moveRight(){
    marginLeft=marginLeft+10;
 img.style.marginLeft = marginLeft +'px';   
    
}

 img.onclick = function(){
   var interval =  setInterval(moveRight,100);
 
};