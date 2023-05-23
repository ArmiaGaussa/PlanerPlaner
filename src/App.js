import React from 'react';
import MyCalendar from './MyCalendar';
import Calendar from './Calendar';
import Schedule from './Schedule';

const App = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const events = [
    {
      start: new Date('2023-05-23'),
      end: new Date('2023-05-23'),
      title: 'Event 1',
    },
    {
      start: new Date('2023-05-24'),
      end: new Date('2023-05-24'),
      title: 'Event 2',
    },
    // ... add more events as needed
  ];

  return (
    <div>
      {/* <Calendar onDateChange={handleDateChange} />
      <Schedule date={selectedDate} /> */}
      <MyCalendar events={events} />
    </div>
  );
}

export default App;