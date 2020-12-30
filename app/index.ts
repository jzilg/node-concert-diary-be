import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import morgan from './middleware/morgan'
import router from './router'

const server = express()

server.use([
    morgan,
    bodyParser.json(),
    cors(),
    compression(),
    router,
])

function start(): void {
    const { PORT } = process.env

    server.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log('listen to port:', PORT, '\n')
    })
}

export default {
    start,
}
