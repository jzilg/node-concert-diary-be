export default class RequestError extends Error {
    readonly status: number

    constructor(message: string) {
        super(message)

        this.status = 400
    }
}
