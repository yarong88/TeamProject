
const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)




const PORT = 3000
const _path = path.join( __dirname, '/' )
console.log(_path)

app.use( '/' , express.static(_path))
app.use(logger('tiny'))

// app.get( '/', (req, res) => {
//     res.sendFile( __dirname + '/index.html')
// } )

io.on( 'connection' , (socket) => {
    socket.on( 'chat_message', (msg) => { 
        io.emit( 'chat_message', msg ) // 이벤트 발생
    })
} )



server.listen( PORT, () => {
    console.log( `서버 가동중 ${PORT} `)
})