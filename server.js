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

app.listen(8000, function () {
  console.log('Server running')
})
