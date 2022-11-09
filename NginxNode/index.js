const express = require('express')

const app = express()

const PORT =  parseInt(process.argv[2]) || 8080 

app.get('/datos', (req, res) => {
    console.log(`port ${PORT} -> Fyh  ${ Date().toLocaleString()}`)
    res.send(`Servidor exprepm2ss <span style ="color:blueviolet"> (Nginx) </span> en ${PORT}  - <b>PID ${process.pid}</b> - ${ Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if (err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})