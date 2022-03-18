import { OpenAPIObject } from 'openapi3-ts'
import schemas from './schemas'
import paths from './paths'

const openAPIObject: OpenAPIObject = {
    openapi: '3.0.0',
    info: {
        title: 'Concert Diary API',
        version: '1.0.0',
    },
    components: {
        schemas,
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    paths,
}

export default openAPIObject
