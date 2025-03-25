import http from "node:http"
import {routes} from "./routes.js"
import {json} from "../middlewares/json.js"
const server = http.createServer(async (req, res) => {

    const {method, url} = req

    await json(req, res)
    const route = routes.find(route => {

        return route.method == method && route.path.test(url)
    })

    if ( route) {

        console.log(route)

        return route.handler(req, res)
    }


    return res.end("Teste")
})

server.listen(3334)