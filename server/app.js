const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome MERN-backend Application')
})

app.listen(process.env.PORT, () => {
    console.log('listening on 4000')
})