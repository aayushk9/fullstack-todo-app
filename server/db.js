const mongoose = require("mongoose");

const todo = mongoose.model('todo', {
     title: String,
     description: String,
     completed: Boolean
})

module.exports = todo
