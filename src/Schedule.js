import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Assuming the events data comes from an external source
const events = [
    { date: new Date('2023-05-23'), events: ['Event 1', 'Event 2'] },
    { date: new Date('2023-05-24'), events: ['Event 3', 'Event 4'] },
  ];
  

const Schedule = ({ date }) => {
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const foundEvents = events.find(event => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
    setDayEvents(foundEvents ? foundEvents.events : []);
  }, [date]);

  return (
    <div>
      <h2>Events on {format(date, 'MMMM do, yyyy')}:</h2>
      {dayEvents.length > 0 ? (
        <ul>
          {dayEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      ) : (
        <p>No events for this day.</p>
      )}
    </div>
  );
}

export default Schedule;