// Details.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../iamge/sheet1/logo.png'

const DetailsPage = ({ data }) => {
  const { id } = useParams();
  const selectedData = data.find((item) => item.id === id);

  if (!selectedData) {
    return <p>Item not found</p>;
  }

  const {
    photo,
    governorate,
    d_name,
    Purpose,
    type,
    length,
    high,
    spillyway_h,
    capacity,
    date,
    north,
    east,
  } = selectedData;

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const imageStyle = {
    flex: '1',
    maxWidth: '50%',
  };

  const textStyle = {
    flex: '1',
    maxWidth: '50%',
    textAlign: 'left',
    padding: '20px',
  };
  const photoStyle = {
    width: '50%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
  };

  return (
    <div className='container'>
      <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}> 
          <img src={Logo} alt='' className='logo' />
        </div>
        <h2 >تفاصيل السد</h2>
        <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <div style={imageStyle}>
        <img src={photo} alt={d_name} style={photoStyle} />
      </div>
      <div className="card-body">
        <p><strong>المحافظة:</strong> {governorate}</p>
        <p><strong>اسم السد:</strong> {d_name}</p>
        <p><strong>الغرض:</strong> {Purpose}</p>
        <p><strong>نوع السد:</strong> {type}</p>
        <p><strong>الطول:</strong> {length}</p>
        <p><strong>الارتفاع:</strong> {high}</p>
        <p><strong>ارتفاع الفتحة الفائقة:</strong> {spillyway_h}</p>
        <p><strong>السعة:</strong> {capacity}</p>
        <p><strong>تاريخ الانشاء:</strong> {date}</p>
        <p><strong>الشمال:</strong> {north}</p>
        <p><strong>الشرق:</strong> {east}</p>
      </div>
      </div>
    </div>
    
  );
};

export default DetailsPage;
