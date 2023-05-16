const knex = require("../database/knex")


class NotesController{
    async create(request, response){
        const {title, description, rating} = request.body
        const {user_id} = request.params

        await knex("movies_notes").insert({
            title,
            description,
            rating,
            user_id
        })

        response.json()

    }

    async delete(request, response){
        const {id} = request.params

        await knex("movies_notes").where({id}).delete()

        return response.json()
    }
}

module.exports = NotesController