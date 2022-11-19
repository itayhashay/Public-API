async function getJoke() {
    const axios = require('axios');
    return(await axios.get('https://official-joke-api.appspot.com/random_joke'))
}


module.exports = getJoke