var app = require('http').createServer();
var io = module.exports.io = require('socket.io')(app);


const PORT = process.env.PORT || 6200

const SocketManager = require('./socketmanager');


io.on('connection', SocketManager);

app.listen(PORT, ()=>{
    console.log('Connected to Port: ' + PORT);
})