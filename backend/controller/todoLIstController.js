const mongoose = require('mongoose')
const TodoList = require('../model/todoListModel')

const getTodoLists = async (req, res) => {
    const { _id } = req.user

    const todoList = await TodoList.find({user_id: _id}).sort({date: -1})

    res.status(200).json(todoList)
}

const createTodoList = async (req, res) => {
    const { title, description, time, date } = req.body
    const { _id } = req.user

    try {
        const todoList = await TodoList.create({title, description, time, date, user_id: _id})

        res.status(200).json(todoList)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteTodoList = async (req, res) => {
    const { id } = req.params

    try {
        const todoList = await TodoList.findByIdAndDelete(id)

        res.status(200).json({todoList})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateTodoList = async (req, res) => {
    const { id } = req.params

    try {
        const todoList = await TodoList.findByIdAndUpdate(id, {...req.body}, {new: true})

        res.status(200).json({todoList})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = {
    getTodoLists,
    createTodoList,
    deleteTodoList,
    updateTodoList
}