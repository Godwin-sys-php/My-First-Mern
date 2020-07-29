const Todo= require('../models/todo');

exports.getAll= (req, res) => {
    if (typeof req.query.status !== undefined) {
        Todo.find({ complete:  req.query.status, idUser: req.params._id })
            .then((todo) => res.status(200).json(todo))
            .catch(error => res.status(400).json({ error }));
    } else {
        Todo.find({ idUser: req.params._id })
            .then((todo) => res.status(200).json(todo))
            .catch(error => res.status(400).json({ error }));
    }
};

exports.getOne= (req, res) => {
    Todo.findOne({ _id: req.params._id })
        .then((todo) => res.status(200).json(todo))
        .catch(error => res.status(400).json({ error }));
};

exports.addOne = (req, res) => {
    const todoObject= req.body;
    console.log(req.body);
    const todo= new Todo({ ...todoObject });
    todo.save()
        .then(() => res.status(201).json({ message: 'Save !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.updateOne = (req, res) => {
    Todo.updateOne({ _id: req.params._id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Update !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOne= (req, res) => {
    Todo.deleteOne({ _id: req.params._id })
        .then(() => res.status(200).json({ message: 'Delete !' }))
        .catch(error => res.status(400).json({ error }));
};