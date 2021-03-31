import { ErrorRequestHandler } from 'express'
import { MongoError } from 'mongodb'
import { ValidationError } from 'yup'
import RequestError from '../../errors/RequestError'
import ApiError from '../../entities/ApiError'

function createErrorJson(error: Error, message = 'Something went wrong. Please try again.'): ApiError {
    return {
        message,
        error,
    }
}

/* eslint-disable consistent-return */
const errorMiddleware: ErrorRequestHandler = (error, request, response, next) => {
    if (response.headersSent) {
        return next(error)
    }

    if (error instanceof RequestError) {
        response.status(400)
        response.json(createErrorJson(error, error.message))
        return
    }

    if (error instanceof MongoError) {
        response.status(500)
        response.json(createErrorJson(error))
        return
    }

    if (error instanceof ValidationError) {
        response.status(400)
        response.json(createErrorJson(error, 'Something wrong with the data to be stored'))
        return
    }

    response.status(500)
    response.json(createErrorJson(error))
}

export default errorMiddleware
