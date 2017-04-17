const path = require('path')
const childProcess = require('child_process')
const phantomjs = require('phantomjs-prebuilt')
const binPath = phantomjs.path
const app = require('express')();

const childArgs = [
  path.join(__dirname, 'phantom.js'),
  // 'some other argument (passed to phantomjs script)'
]


app.get('/', (req, res) => {
  childProcess.execFile(binPath, childArgs, function cb (err, stdout, stderr) {
    console.log('error => ', err);
    console.log('output => ', stdout);
    console.log(stderr);
    res.send('succces');
  })
})

app.listen(4000, () => {
  console.log('listen on port 4000');
});
