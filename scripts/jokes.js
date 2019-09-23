/**
 * Get a Chuck Norris nerdy joke module.
 * Uses ES6 import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * Includes fetch example.
 * @module jokes
 * @author Denise Case
 */

 /**
  * Joke URI
  * 
  * @returns { "type": "success", "value": { "id": , "joke": } }
  */
const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

/**
 * Return a random nerdy joke.
 * @returns string
 */
export const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}