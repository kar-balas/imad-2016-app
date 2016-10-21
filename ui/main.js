console.log('Loaded!');
// chanfe the text of main file div
var element= document.getElementById('main_text');
element.innerHTML="New value";
var img = document.getElementById("madi");
console.log('Loaded2');
 img.onClick = function(){
    console.log("Inside OnClick");
 //   img.style.marginLeft = '100px';
};