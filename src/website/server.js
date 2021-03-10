const express = require('express');
const app = express();

module.exports = () => {
    app.get('/', (req, res) => {
        res.send('Welcome to the Ginger Bot\'s main page')
    })

    app.listen(80, () => console.log('Website listening at ginger-bot.vercel.app'))
}