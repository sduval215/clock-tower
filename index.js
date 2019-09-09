const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

/**
 * Plays sounds utilizing the node-omxplayer package
 * @param { String } hour - hour file to be play (1 - 12) 
 */
function playSound(hour){
  const Omx = require('node-omxplayer');
  Omx(`./audio/${hour}.mp3`);
}

/**
 * Returns momentJS time based on format argument provided
 * @param { String } format - momentjs format to return moment value i9n
 * @returns { String } - returns formatted momentjs time based on format arg
 */
function returnFormattedTime(format){
  const moment = require('moment');
  return moment().format(format);
}
 
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);

  setInterval(() => {
    console.log('checking time...');
    // get hour (24) as number
    const currentHour = Number(returnFormattedTime('H'));
    // if between 9 (9am) and 21 (9pm)
    if (currentHour >= 9 && currentHour <= 21) {
      console.log('currently between 9am and 9pm: ', currentHour);
      const currentMinutesAndSeconds = returnFormattedTime('mm:ss');
      console.log('current time: ', returnFormattedTime('hh:mm:ss'));
      if(currentMinutesAndSeconds === '00:00') { // if on the hour (00:00)
        const hourFile = returnFormattedTime('h');
        playSound(hourFile);
      }
    }  
  }, 1000);
  
});