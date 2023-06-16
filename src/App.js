import React from 'react';
import MyCalendar from './MyCalendar';
import Calendar from './Calendar';
import Schedule from './Schedule';
import Group from './Group';
import Teacher from './Teacher';
import Place from './Place';
import EventLoader from './EventLoader';
import { useState } from 'react';
import { load } from 'js-yaml';
import { format, setDay, setHours, setMinutes, startOfWeek, addWeeks, endOfWeek } from 'date-fns';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const App = () => {
  let location = useLocation();
  const [applyLayout, setApplyLayout] = React.useState(true);

  const routesWithoutLayout = ['/eventloader'];
  const shouldApplyLayout = !routesWithoutLayout.some(route => location.pathname.includes(route));

  if (shouldApplyLayout !== applyLayout) {
    setApplyLayout(shouldApplyLayout);
  }

  return (
      <div className={applyLayout ? 'app' : ''}>
        <SwitchTransition>
          <CSSTransition timeout={300} classNames='fade' key={location.key}>
          <div className={applyLayout ? 'box-container' : ''}>
            <Routes location={location}>
              <Route path="/" element={
                <>
                  <Link to="/place" className="box">Sala</Link>
                  <Link to="/teacher" className="box">Prowadzący</Link>
                  <Link to="/group" className="box">Grupa</Link>
                </>
              } />
              <Route path="/group" element={<Group />} />
              <Route path="/place" element={<Place />} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/eventloader/:folder/:path" element={<EventLoader />} />
            </Routes>
            </div>
          </CSSTransition>
          </SwitchTransition>
      </div>
  )
}

export default App;