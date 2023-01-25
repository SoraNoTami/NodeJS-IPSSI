import express from 'express'
import db from '../db'

const app = express.Router()



app.get('/todos', (req, res) => {
  try {
    if (!req.body.username) {
      throw new Error('Invalid body provided')
    }
    const todoList = db.todoList.findMany({
      where: {
        userId: req.body.id
      }
    })
    
  res.status(200).json({ message: `TodoList: ${todoList}` })
  }catch(e) {
    res.status(400).json({ error: e?.toString() })
}
})

app.get('/todo/:uuid', (req, res) => {
  // console.log(req.headers.authorization)
  res.status(200).json({ message: 'Hello user' })
})

app.post('/todo', (req, res) => {
  if (!req.body.name) {
    throw new Error('Invalid body provided')
  }
  const todoList = db.todoList.create({
    data: { name: req.body.name, userId: req.body.userId }
  })
  res.status(200).json({ todoList })
})

app.delete('/todo/:uuid', (req, res) => {
    try {
      if (!req.params.uuid) {
        throw new Error('Invalid params provided')
      }
      const todoList = db.todoList.deleteMany({
        where: {
          userId: req.params.uuid
        }
      })
      return res.status(200).json({ message: 'Your todo list has been deleted' })
    } catch(e) {
      res.status(400).json({ error: e?.toString() })
  }
  
})

app.put('/todo/:uuid', (req, res) => {
 
  res.status(200).json({ message: 'Hello user' })
})

app.post('/todoItem', (req, res) => {
  // console.log(req.headers.authorization)
  res.status(200).json({ message: 'Hello user' })
})

app.put('/todoItem', (req, res) => {
  // console.log(req.headers.authorization)
  res.status(200).json({ message: 'Hello user' })
})

app.delete('/todoItem/:uuid', (req, res) => {
  try {
    if (!req.params.uuid) {
      throw new Error('Invalid body provided')
    }
    const todoItem = db.todoList.deleteMany({
      where: { userId: req.params.uuid },
    })
    return res.status(200).json({ message:'Your todo list has been deleted' })
  } catch(e) {
    res.status(400).json({ error: e?.toString() })
  }
})


export default app