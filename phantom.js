var page = require('webpage').create();

page.open('https://www.google.com', function(status) {
  phantom.addCookie({
    'name'  : 'PHPSESSID',
    'value' : 'xxxxxx',
    'domain': 'ggg.com',
    'path'  : '/'
  });
  console.log("Status: " + status);
  if(status === "success") {
    page.render('pics/example10.png');
    console.log('cookie', JSON.stringify(phantom.cookies));
  }
  phantom.exit();
});


