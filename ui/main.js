// create a request
var request=new XMLHttpRequest();
//
//make a request
//detect a change and do what u wan to do whateever

request.onreadystatechange=function(){
if (request.onreadyState === XMLHttpRequest.DONE){
  if (request.status === 200)
  {
      var counter =request.responseText;
      request.open('GET','http://kar-balas.imad-hasura-app.io',true);
      request.send(null);
  }
}
};     



//execute what u want to do
console.log("Welcoome to main");
var ctr =0;
var ctrButton=document.getElementById('ctrBtn');
    console.log('Outside Button Click');
ctrButton.onclick=function(){
    console.log('Inside Button Click');
ctr += 1;
var element=document.getElementById('counter');
element.innerHTML=ctr.toString();
};
