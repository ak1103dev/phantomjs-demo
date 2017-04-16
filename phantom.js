var page = require('webpage').create();

var settings = {
  headers: {
    Cookie: 'xxxxxxx'
  }
}

page.open('https://www.google.com', function(status) {

  console.log("Status: " + status);
  if(status === "success") {
    console.log('Content: ', page.content);
    setTimeout(function(){
      page.render('example.png');
    }, 5000);
  }
  // console.log('cookies', JSON.stringify(page.cookies));
  setTimeout(function(){
    phantom.exit();
  }, 60000);
});


