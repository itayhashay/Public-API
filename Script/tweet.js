const { text } = require("body-parser")
const client = require("./twitterClient")


const tweet = async (msg) => {
    try{
        await client.v1.tweet(msg)
        console.log(msg)
    }
    catch (e){
        console.error(e)
    }
}


module.exports = tweet