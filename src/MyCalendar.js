import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, startOfWeek, getDay, parse } from 'date-fns'
import './MyCalendar.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

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
      <Link to="/" className="floating-button">
        <span className="back-arrow">&#8592;</span>
      </Link>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh" }}
      />
    </div>
  )
  
  export default MyCalendar
  