const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../model/userModel')
const { getTodoLists, createTodoList, deleteTodoList, updateTodoList } = require('../controller/todoLIstController')

router.use(async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: "Authorization token required"})
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, "johnthomasalog1228")

        req.user = await User.findOne({_id}).select('_id')
        
        next()
    } catch (error) {
        res.status(401).json({error: error.message})
    }
})

router.get('/', getTodoLists)
router.post('/', createTodoList)
router.delete('/:id', deleteTodoList)
router.patch('/:id', updateTodoList)


module.exports = router