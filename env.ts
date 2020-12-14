import dotenv from 'dotenv'

const dotenvConfig = dotenv.config()

if (dotenvConfig.error) {
    throw dotenvConfig.error
}
