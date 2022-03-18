import './env'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import * as OpenApiValidator from 'express-openapi-validator'
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types'
import router from './web/router'
import routes from './web/routes'
import errorMiddleware from './web/middleware/errorMiddleware'
import swaggerDocument from './swagger/swagger.json'

const { PORT } = process.env
const server = express()

server.use([
    morgan('dev'),
    express.json(),
    cors(),
    compression(),
])

server.use(
    OpenApiValidator.middleware({
        apiSpec: swaggerDocument as OpenAPIV3.Document,
        validateResponses: true,
        ignorePaths: (path: string) => path === routes.root || path.includes(routes.apiDocs),
    }),
)

server.use([
    router,
    errorMiddleware,
])

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
