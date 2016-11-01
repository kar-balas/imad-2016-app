// InputNames
var submitElement=document.getElementById('submitId');
submitElement.onclick=function(){
            console.log("Inside onclick");
            var inputElement=document.getElementById('inputnames');
            var name=element.value;
            var names=[];
            var list='';

            names.push(name);
            for(i=0;i<names.length;i++){
                list='<li>'+names[i]+'</li>';   
                }
            var ulElement=document.getElementById('namelist');
            ulElement.innerHTML=list;

};














//var counter=0;

//execute what u want to do
console.log("Welcoome to main");

var ctrButton=document.getElementById('ctrBtn');
    console.log('Outside Button Click');
ctrButton.onclick=function(){
    


// create a request to counter endpoint
var request=new XMLHttpRequest();
//
//make a request
//detect a change and do what u wan to do whateever

request.onreadystatechange=function(){
if (request.readyState === XMLHttpRequest.DONE){
 if (request.status === 200)
 {
     var counter =request.responseText;
var element=document.getElementById('count');
element.innerHTML=counter.toString();
 }
     
}
}; 
    
     request.open('GET','http://kar-balas.imad.hasura-app.io/counter',true);
      request.send(null);
//counter += 1;
};






