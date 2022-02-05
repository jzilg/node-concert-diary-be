import './env'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import router from './web/router'
import errorMiddleware from './web/middleware/errorMiddleware'

const server = express()

server.use([
    morgan('dev'),
    express.json(),
    cors(),
    compression(),
    router,
    errorMiddleware,
])

const { PORT } = process.env

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('listen to port:', PORT, '\n')
})
