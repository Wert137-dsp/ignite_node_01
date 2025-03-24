export const routes = [

    {
        method: "GET",
        path: "/tasks",
        handler: (req, res) => {

            return res.writeHeader(200).end("Ok")
        }
    },

    {
        method: "POST",
        path: "/tasks",
        handler: (req, res) => {

            console.log(req.body)

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