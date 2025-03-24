import dayjs from "dayjs"
import { Database } from "./database.js"
import {randomUUID} from "node:crypto"
import {buildRouthPath} from "../utils/build-route_path.js"

const database = new Database()
const tasks = []
export const routes = [

    {
        method: "GET",
        path: buildRouthPath("/tasks"),
        handler: (req, res) => {

            return res.writeHeader(200).end(JSON.stringify(tasks))
        }
    },

    {
        method: "POST",
        path: buildRouthPath("/tasks"),
        handler: (req, res) => {

            console.log(req.body)

            const {title, description} = req.body

            const task = {

                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: dayjs().format(),
                update_at: dayjs().format(),
            }

            tasks.push(task)

            return res.writeHeader(201).end()
        }
    },

    {
        method: "PUT",
        path:"/tasks/:id",
        handler: (req, res) => {

            console.log(req.body)

            return res.writeHead(204).end("Ok")
        }
    },

    {
        method: "PATCH",
        path:"/tasks/:id/complete",
        handler: (req, res) => {

            console.log(req.body)

            return res.writeHead(204).end("Ok")
        }
    },

    {
        method: "DELETE",
        path:"/tasks/:id",
        handler: (req, res) => {

            console.log(req.id)

            return res.writeHead(204).end("Ok")
        }
    },


]