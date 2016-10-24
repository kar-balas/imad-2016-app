console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value";
var img = document.getElementById('madi');
var marginright=0;
function  moveright(){
    marginright=marginright+10;
 img.style.marginLeft = marginright +'px';   
    
}



 img.onclick = function(){
     setinterval(moveright,100);
 
};