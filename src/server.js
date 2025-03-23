import http from "node:http"

const server = http.createServer((req, res) => {

    return res.end("Teste")
})

server.listen(3334)