const express = require('express')
const path = require('path')
const app = express();
const port = process.env.PORT || 3001


app.use(express.static(path.resolve(__dirname, './public')));

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register.html' ,(req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login.html' , (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})