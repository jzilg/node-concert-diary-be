import express from 'express'
import bodyParser from 'body-parser'
import morgan from './middleware/morgan'
import router from './router'

const server = express()

server.use([
    morgan,
    bodyParser.json(),
    router,
])

function start(): void {
    const { PORT } = process.env

    server.listen(PORT, () => {
        console.log('listen to port:', PORT, '\n')
    })
}

export default {
    start,
}
