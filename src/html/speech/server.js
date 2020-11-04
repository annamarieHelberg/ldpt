var https = require('https')
var pem = require('https-pem')

const ecstatic = require('ecstatic')({
    root: '.',
    showDir: true,
    autoIndex: true
})

var server = https.createServer(pem, ecstatic)

server.listen(4430, function () {
    console.log('The server is running on https://localhost:4430')
})
