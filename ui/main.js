// InputNames

var submitElement=document.getElementById("submitId");
submitElement.onclick=function(){
            // Request to server for names array is made start
            var request=new XMLHttpRequest();
            //make a request
            //detect a change and do what u wan to do whateever
            request.onreadystatechange=function(){
            if (request.readyState === XMLHttpRequest.DONE){
                 if (request.status === 200) {
                       var names =request.responseText;
                       names=JSON.parse(names);
                       var list='';
                       for(i=0;i<names.length;i++){
                           list +='<li>'+names[i]+'</li>';
                           }
                       var ulElement=document.getElementById('namelist');
                       ulElement.innerHTML=list;
                       }
                   }
             };
             //have to change this if its localhost or net
//             request.open('GET','http://kar-balas.imad.hasura-app.io/submit-name?+name',true);
//             request.open('GET','http://kar-balas.imad.hasura-app.io/submit-name?+name',true);
var inputElement=document.getElementById('inputNamesId');
var name=inputElement.value;
           request.open('GET','/submit-name?name=' +name,true);
             request.open('GET','/submit-name?name='+name,true);
             request.send(null);


            // Request to server made and respose got.
};



//var counter=0;

//execute what u want to do

var ctrButton=document.getElementById('ctrBtn');
ctrButton.onclick=function(){

      // create a request to counter endpoint
         var request=new XMLHttpRequest();
         //make a request
         //detect a change and do what u wan to do whateever
         request.onreadystatechange=function(){
         if (request.readyState === XMLHttpRequest.DONE){
              if (request.status === 200) {
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
