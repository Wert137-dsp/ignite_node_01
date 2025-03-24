import dayjs from "dayjs"



const tasks = []
export const routes = [

    {
        method: "GET",
        path: "/tasks",
        handler: (req, res) => {

            return res.writeHeader(200).end(JSON.stringify(tasks))
        }
    },

    {
        method: "POST",
        path: "/tasks",
        handler: (req, res) => {

            console.log(req.body)

            const {title, description} = req.body

            const task = {

                id: 1,
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

            console.log(req.body)

            return res.writeHead(204).end("Ok")
        }
    },


]