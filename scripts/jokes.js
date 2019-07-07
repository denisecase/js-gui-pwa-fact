/**
 * Get a Chuck Norris nerdy joke module.
 * Uses ES6 import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * Includes HTTP request example.
 * @module jokes
 * @author Denise Case
 */

// returns { "type": "success", "value": { "id": , "joke": } }
const jokeURL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
const maxMillisecondsToRespond = 2000;

/**
 * Return a random nerdy joke.
 * @returns Promise
 */
export function getJoke() {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();  // make a request
    req.timeout = maxMillisecondsToRespond; // millisecs to respond
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        if (req.status === 200) {
          const obj = JSON.parse(req.response);
          const joke = obj.value.joke;
          resolve(joke)
        } else {
          console.log('No joke, sorry')
          reject(req.status)
        }
      }
    }
    req.ontimeout = () => { reject('Error - timed out: ' + req.time) }
    req.open("GET", jokeURL, true);  // yes, async
    req.send();
  })
}
