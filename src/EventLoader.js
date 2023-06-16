import React from 'react';
import MyCalendar from './MyCalendar';
import { useEffect } from 'react';
import { load } from 'js-yaml';
import { format, setDay, setHours, setMinutes, startOfWeek, addWeeks, endOfWeek } from 'date-fns';
import { useParams } from 'react-router-dom';

const EventLoader = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [events, setEvents] = React.useState([]);
  const { folder, path } = useParams();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const convertTimeToDate = (day, time, weekStart) => {
    const [startHour, startMin] = time.split('-')[0].split(':');
    const [endHour, endMin] = time.split('-')[1].split(':');

    let start = setDay(weekStart, day);
    start = setHours(start, startHour);
    start = setMinutes(start, startMin);

    let end = setDay(weekStart, day);
    end = setHours(end, endHour);
    end = setMinutes(end, endMin);

    return { start, end };
  }

  useEffect(() => {
    fetch("/"+folder+"/"+path)
    .then(response => response.text())
    .then(yamlData => {
      const data = load(yamlData);
      const daysMapping = {
        mon: 1, tues: 2, wed: 3, thurs: 4, fri: 5
      };

      const newEvents = [];
      const schoolYearStart = startOfWeek(Date.now()); // 1st of September, 2023
      const schoolYearEnd = endOfWeek(new Date(2024, 5, 30)); // 30th of June, 2024

      for (let weekStart = schoolYearStart; weekStart <= schoolYearEnd; weekStart = addWeeks(weekStart, 1)) {
        for (let day in data) {
          if (data.hasOwnProperty(day)) {
            for (let time in data[day]) {
              if (data[day].hasOwnProperty(time) && data[day][time].length > 0) {
                const event = data[day][time][0];
                const { start, end } = convertTimeToDate(daysMapping[day], time, weekStart);

                newEvents.push({
                  start,
                  end,
                  title: `${event.przedmiot} - ${event.typ} - ${event.prowadzacy}`,
                });
              }
            }
          }
        }
      }

      setEvents(newEvents);
    });
  }, []);

  return (
    <MyCalendar events={events} />
  )
}

export default EventLoader;