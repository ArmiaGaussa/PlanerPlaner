import React from 'react';
import { Link } from 'react-router-dom';
import './Group.css';

const Place = () => {
  const places = [
    {name: "Sala 101", path: "place/101_schedule.yaml"},
    {name: "Sala 102", path: "place/102_schedule.yaml"},
    {name: "Sala 103", path: "place/103_schedule.yaml"},
    {name: "Sala 104", path: "place/104_schedule.yaml"},
    {name: "Sala 205", path: "place/205_schedule.yaml"},
    {name: "Sala 206", path: "place/206_schedule.yaml"},
    {name: "Sala 207", path: "place/207_schedule.yaml"},
    {name: "Sala 208", path: "place/208_schedule.yaml"},
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

export default Place;