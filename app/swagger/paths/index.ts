import concerts from './concerts'
import festivals from './festivals'
import user from './user'
import statistics from './statistics'

export default {
    ...concerts,
    ...festivals,
    ...statistics,
    ...user,
}
