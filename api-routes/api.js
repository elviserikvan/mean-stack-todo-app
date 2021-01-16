const express = require('express');
const router = express.Router();
const Todos = require('../models/mongoose');

router.get('/', async (req, res) => {
	let todos = await Todos.find().exec();
	res.json(todos);
})

router.post('/', (req, res) => {

	// Check if title is empty
	if (req.body.title == '') {
		res.json({
			error: true,
			message: 'Title cannot be empty'
		})
	}else {
	// Title is not empty
		let todo = {
			title: req.body.title,
			completed: false
		}


		let newTodo = new Todos(todo);
		newTodo.save((err, doc) => {
			if(err) {
				console.log(err)
				res.json({'error': err})
			}


			res.json(doc);
		})
	}


})


router.put('/:id', async (req, res) => {
	let id = req.params.id
	try {
		let todo = await Todos.findOne({_id: id}).exec()
		todo.completed = !todo.completed;
		todo.save().then(newTodo => {
			res.json(newTodo);
		})
	} catch(e) {
		res.send(e);
	}
})


router.delete('/:id', async (req, res) => {
	let id = req.params.id
	let response = await Todos.deleteOne({_id: id})
	res.send(response);
})

module.exports = router;
