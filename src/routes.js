import dayjs from "dayjs"
import { Database } from "./database.js"
import {randomUUID} from "node:crypto"
import {buildRouthPath} from "../utils/build-route_path.js"

const database = new Database()

export const routes = [

    {
        method: "GET",
        path: buildRouthPath("/tasks"),
        handler: (req, res) => {

            const {search} = req.query

            const tasks = database.select("tasks", search ? {

                title: search,
                description: search,
            } : null)

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
                updated_at: dayjs().format(),
            }

          
            database.insert("tasks", task)

            return res.writeHeader(201).end()
        }
    },

    {
        method: "PUT",
        path:buildRouthPath("/tasks/:id"),
        handler: (req, res) => {

           const {id} = req.params
           const {title, description} = req.body

           const result = database.update("tasks", id, {

                title,
                description,
                updated_at: dayjs().format(),
           })

           if(result) {

            return res.writeHead(200).end("Tarefa atualizada")
           }else{
            return res.writeHead(400).end("Id Inválido")
           }

            
        }
    },

    {
        method: "PATCH",
        path:buildRouthPath("/tasks/:id/complete"),
        handler: (req, res) => {

            const {id} = req.params
            
 
            const result = database.update("tasks", id, {
 
             completed_at: "Complete"
            })
 
            if(result) {
 
             return res.writeHead(200).end("Tarefa Concluída")
            }else{
             return res.writeHead(400).end("Id Inválido")
            }

           
        }
    },

    {
        method: "DELETE",
        path: buildRouthPath("/tasks/:id"),
        handler: (req, res) => {

            const {id} = req.params
           if(database.delete("tasks", id)){

            return res.writeHead(201).end("Tarefa deletada")
           }else{

            return res.writeHead(400).end("Id Inválido")
           }

            
        }
    },


]