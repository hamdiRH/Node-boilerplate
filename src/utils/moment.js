import Moment from 'moment-timezone'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

moment.tz.setDefault('Africa/Tunis')

export default moment