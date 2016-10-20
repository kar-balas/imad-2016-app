var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


// htmlTemplate
var article={
   'article-one':{
                 title : 'Article One',
                 heading3: 'Article One',
                 date: 'Sep 5 , 2016',
                 content:`<p>
                      This is the content for article One. This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.
                      </p>
                      <p>
                      This is the content for article One. This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.
                       </p>
                       <p>
                           This is the content for article One. This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.This is the content for article One.
                         </p>`    
                    },
      'article-two':{
                    title: 'Article Two', 
                    heading3:'Article Two',
                   date: 'Sep 5 , 2016',
                   content:`  <p>
                              This is the content for article Two
                              </p>`

                                   
          
      }
    
                
    
};


var articleFn=function(data){ 
    var title=data.title;
    var heading3=data.heading3;
    var date=data.date;
    var content=data.content;
    var htmlTemplate =    `<html>
     <head>
        <title>
          ${title}
        </title>
         <meta name="viewport" content="width= device-width initial-scale=1" />
         <link href="/ui/style.css"  rel="stylesheet"   />

       </head>
         <body>
         <div class='container'>

         <div>
        <a href="/">home </a>
        </div>
         <hr/>
         <h3>
          ${heading3}
         </h3>
         <div>
         ${date}
        
          </div>
         <div>
         ${content}
         
              </div>
              </div>

            </body>`  ;
            return htmlTemplate;
            };
            

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get ('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(articleFn(article[articleName]));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});