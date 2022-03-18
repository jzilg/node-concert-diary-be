export default class AuthorizationError extends Error {
    readonly status: number

    constructor(message: string) {
        super(message)

        this.status = 401
    }
}
