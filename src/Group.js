import React from 'react';
import { Link } from 'react-router-dom';
import './Group.css';

const Group = () => {
  const groups = [
    {name: "Grupa 1", path: "group/group_I_schedule.yaml"},
    {name: "Grupa 2", path: "group/group_II_schedule.yaml"},
    {name: "Grupa 3", path: "group/group_III_schedule.yaml"},
    {name: "Grupa 4", path: "group/group_IV_schedule.yaml"},
    {name: "Grupa 5", path: "group/group_V_schedule.yaml"},
    {name: "Grupa 6", path: "group/group_VI_schedule.yaml"},
  ]

  return (
      <div className="">
        <Link to="/" className="back-button">Powrót</Link>
        <div className="box-container">
          {groups.map((group, index) => (
            <Link to={`/eventloader/${group.path}`} className="box" key={group.path}>
              {group.name}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Group;