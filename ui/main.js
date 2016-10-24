console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value";
var img = document.getElementById('madi');
 img.onclick = function(){
     alert("Inside OnClick");
    console.log('Inside OnClick');
 //  img.style.marginLeft = marginLeft+ //'100px';
};