import fs from "node:fs/promises"

const databasePath = new URL("../db.json", import.meta.url)

export class Database{

    #database = {}

    constructor(){
       
        fs.readFile(databasePath, "utf8").then(data => {

            this.#database = JSON.parse(data)

        }).catch(() =>{

            this.#persist()
        })
    }

    #persist() {

        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table, search){

        let data = this.#database[table] ?? []

        if(search){

            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {

                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data

    }

    insert(table, data) {

        if(Array.isArray(this.#database[table])){

            this.#database[table].push(data)
        }else{

            this.#database[table] = [data]
        }

        this.#persist()

    }

    update(table, id, data){

        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if(rowIndex > -1) {

            if(!data.completed_at){

                console.log("Não")
                const {completed_at, created_at} = this.#database[table][rowIndex]
                this.#database[table][rowIndex] = {id, ...data, completed_at, created_at}
            }else{

                console.log("Sim")

                const {title, description, created_at, updated_at} = this.#database[table][rowIndex]
                this.#database[table][rowIndex] = {id, title, description, ...data, created_at, updated_at}
            }

            
            this.#persist()
        
            return 1
        }else{

            return 0
        }

    }

    delete(table, id) {

        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if(rowIndex > -1) {

            this.#database[table].splice(rowIndex, 1)
            this.#persist()

            return 1
        }else {

            return 0
        }

    }


}
