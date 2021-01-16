import { ErrorRequestHandler } from 'express'
import { MongoError } from 'mongodb'
import { ValidationError } from 'yup'
import ApiError from '../entities/ApiError'

const errorMiddleware: ErrorRequestHandler = (error, request, response, next) => {
    const apiError: ApiError = {
        message: 'Something went wrong. Please try again.',
        error,
    }

    if (error instanceof MongoError) {
        response.status(500)
        response.json(apiError)
        return
    }

    if (error instanceof ValidationError) {
        apiError.message = 'Something wrong with the data to be stored'

        response.status(400)
        response.json(apiError)
        return
    }

    response.status(500)
    response.json(apiError)
}

export default errorMiddleware
