import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom';

export default function VanHostDetail() {
    const {van} = useOutletContext();
  return (
    <div>
      <div className='mb-1'>
        <strong>Name:</strong> {van.name}
      </div>
      <div className='mb-1'>
        <strong>Category:</strong> {van.type && van.type[0].toUpperCase() + van.type.slice(1)}
      </div>
      <div className='mb-1'>
        <strong>Description:</strong> {van.description}
      </div>
      <div className='mb-1'>
        <strong>Visiability:</strong> Public
      </div>
    </div>
  );
}
