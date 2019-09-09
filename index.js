const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

function getAudioFile(fileName){
  return Omx(`./audio/${fileName}.mp3`);
}

function checkTime(){
  // check if time is between 9am and 9pm
    // if time is between that interval
      // if time is on the hour
        // play hour time
}

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);

  const moment = require('moment');
  const Omx = require('node-omxplayer');

  setTimeout(() => {
    console.log('Checking time....');
    checkTime();
  }, 1000);

  
});