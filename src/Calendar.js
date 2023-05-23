import React, { useState } from 'react';
import { format } from 'date-fns';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  }

  return (
    <div>
      <input type="date" onChange={handleDateChange} value={format(selectedDate, 'yyyy-MM-dd')} />
      <p>Selected date: {format(selectedDate, 'MMMM do, yyyy')}</p>
    </div>
  );
}

export default Calendar;