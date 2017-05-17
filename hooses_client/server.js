var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

io.on('connection', function(socket){
  socket.on('kitchenTable', () => {
    io.sockets.emit('kitchenTable')
  })

  

})

http.listen(3000, function (){
  console.log('app listening at 3000')
})


