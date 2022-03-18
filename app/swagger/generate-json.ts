import fs from 'fs'
import path from 'path'
import openAPIObject from './index'

const filename = path.resolve(__dirname, 'swagger.json')
const data = JSON.stringify(openAPIObject, null, 2)

fs.writeFile(filename, data, (error) => {
    if (error !== null) {
        throw error
    }

    console.log(`✅ ${filename} generated`)
})
