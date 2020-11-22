import express from 'express'
import dotenv from 'dotenv'
import morgan from './middleware/morgan'
import router from './router';

const dotenvConfig = dotenv.config()

if (dotenvConfig.error) {
    throw dotenvConfig.error
}

const server = express()

server.use([
    morgan,
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
