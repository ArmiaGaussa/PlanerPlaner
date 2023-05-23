import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, startOfWeek, getDay, parse } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
    'en-US': require('date-fns/locale/en-US'),
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

const MyCalendar = ({ events }) => (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
  
  export default MyCalendar
  