const express = require('express')
const app = express()

const mockData = [{ name: 'Mark' }, { name: 'Jill' }]

const date = new Date()

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'Successfully got users. Nice',
    data: { users: mockData },
    createdAt:
      String(date.getDate()) +
      ',' +
      String(date.getMonth()) +
      ',' +
      String(date.getFullYear()),
  })
})

app.get('/user/:id', (req, res) => {
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'Successfully got single user',
    data: {
      user: req.params.id,
    },
  })
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const mockUsername = 'billyTheKid'
  const mockPassword = 'superSecret'

  if (mockUsername === username && mockPassword === password) {
    res.json({
      success: true,
      message: 'Password and Username match',
      token: 'encrypted token goes here',
    })
  } else {
    res.json({
      success: false,
      message: 'Password and Username does not match',
    })
  }
})

app.listen(8000, function () {
  console.log('Server running')
})
