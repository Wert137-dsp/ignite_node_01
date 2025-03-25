import fs from "node:fs/promises"

const databasePath = new URL("../db.json", import.meta.url)

export class Database{

    #database = {}

    constructor(){
       
        fs.readFile(databasePath, "urf8").then(data => {

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

        if(search){}

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

            this.#database[table][rowIndex] = {id, ...data}
            this.#persist()
        }

    }

    delete(table, id) {

        const rowIndex = this.#database[table].findIndex(row => row.id = id)

        if(rowIndex > -1) {

            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }

    }


}
