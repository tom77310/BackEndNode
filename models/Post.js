const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titre : {type : 'string'},
    auteur : {type : 'string'},
    description : {type : 'string'},
})

module.exports = mongoose.model('Post', postSchema)