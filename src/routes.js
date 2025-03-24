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
    }
]