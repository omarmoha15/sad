// Card.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ id, img, title, description, author }) => {
  return (
    <Link to={`/details/${id}`}>
        <div className="card">
          <img src={img} alt={title} />
          <div className="card-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <h5>{author}</h5>
          </div>
        </div>
      </Link>
    );
  }


export default Card;
