import React from 'react';
import { Link } from 'react-router-dom';
import './Group.css';

const Teacher = () => {
  const places = [
    {name: "Dariusz M", path: "teacher/Dariusz M_schedule.yaml"},
    {name: "Dariusz Mroz", path: "teacher/Dariusz Mroz_schedule.yaml"},
    {name: "Jan Mosiadz", path: "teacher/Jan Mosiadz_schedule.yaml"},
    {name: "Kamil D", path: "teacher/Kamil D_schedule.yaml"},
    {name: "Kamil Dr", path: "teacher/Kamil Dr_schedule.yaml"},
    {name: "Kamil Drama", path: "teacher/Kamil Drama_schedule.yaml"},
    {name: "Marek K", path: "teacher/Kamil Drama_schedule.yaml"},
    {name: "Marek Ks", path: "teacher/Marek Ks_schedule.yaml"},
    {name: "Marek Ksiadz", path: "teacher/Marek Ksiadz_schedule.yaml"},
  ]

  return (
      <div className="">
        <Link to="/" className="back-button">Powrót</Link>
        <div className="box-container">
        {places.map((group, index) => (
            <Link to={`/eventloader/${group.path}`} className="box" key={group.path}>
              {group.name}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Teacher;