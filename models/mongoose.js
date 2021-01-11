const mongoose = require('mongoose');
const todoSchema = {
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	}
};


const Todo = mongoose.model('todo', new mongoose.Schema(todoSchema));

module.exports = Todo;
