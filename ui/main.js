console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value";
var img = document.getElementById('madi');
var marginLeft=0;
var i;
function  moveRight(){
    marginLeft=marginLeft+10;
 img.style.marginLeft = marginLeft +'px';   
    
}

 img.onclick = function(){
     
     for (i=0;i<5;i++)
   {var interval =  setInterval(moveRight,100);
   }
};