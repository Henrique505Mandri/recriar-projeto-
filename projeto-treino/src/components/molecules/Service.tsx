import React from 'react';
import './molecules.css';

interface ServiceProps {
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <div className="service">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Service;
