// use one main.js and import other content from modules
// set type=module in the html script tag

import { getJoke } from "./jokes.js"

const updateWithFact = async (event) => {
  const def = 'Chuck Norris went out of an infinite loop.'
  document.querySelector('#fact').innerHTML = await getJoke() || def
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'btn') { updateWithFact(event) }
})

document.addEventListener('DOMContentLoaded', updateWithFact)
