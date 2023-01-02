const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')

const fs = require('fs')

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
// 소켓 서버를 받아 온다.
const io = new Server(server)
// 소켓 서버를 담는다.

const port = 3000
const _path = path.join(__dirname, './')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

fs.readFile(_path + '/chat_history.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

app.post('/info', function (req, res) {
  const chat_id = req.body.iid
  const chat_pw = req.body.ipw

  res.send(
    `<script>alert("파일이 작성 완료되었습니다.");location.href="./chatting.html"</script>`
  )
})

io.on('connection', (so) => {
  so.on('chat message', (msg) => {
    io.emit('chat message', msg)

    // const chat_iid = chat_id
    // const data = chat_iid + ', ' + msg + '\n'

    fs.stat(_path + 'chat_history.txt', (err, stats) => {
      if (stats) {
        fs.appendFile(_path + 'chat_history.txt', msg, (e) => {
          if (e) throw e
        })
      } else {
        fs.writeFile(_path + 'chat_history.txt', msg, (e) => {
          if (e) throw e
        })
      }
    })

    fs.readFile(_path + 'chat_history.txt', 'utf-8', (err, msg) => {
      if (err) throw err
      console.log(msg)
    })
  })
})

server.listen(port, () => {
  console.log(port + '로 연결되었습니다.')
})
