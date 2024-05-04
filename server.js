const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.default()

server.use(middleware)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
  })
