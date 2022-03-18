import { ErrorRequestHandler } from 'express'
import { HttpError as OpenApiValidatorError } from 'express-openapi-validator/dist/framework/types'
import { MongoError } from 'mongodb'

const errorMiddleware: ErrorRequestHandler = (error, request, response, next) => {
    if (response.headersSent) {
        next(error)
        return
    }

    console.log('\n', error, '\n')

    const getErrorMessage = (): string => {
        if (error instanceof OpenApiValidatorError) {
            return error.name
        }

        const defaultMsg = 'Something went wrong. Please try again.'

        if (error instanceof MongoError) {
            return defaultMsg
        }

        return error.message ?? defaultMsg
    }

    const getErrorObject = (): Object => {
        if (error instanceof MongoError) {
            return {}
        }

        return error
    }

    response.status(error.status ?? 500)
    response.json({
        message: getErrorMessage(),
        error: getErrorObject(),
    })
}

export default errorMiddleware
