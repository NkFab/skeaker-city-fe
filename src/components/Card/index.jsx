/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Card = ({
  image,
  id,
  model,
  brandName,
  price,
  releaseDate,
}) => {
  const history = useHistory();
  return (
    <div
      className="card col-sm-12 col-md-6 col-lg-3"
      onClick={() => {
        history.push(`/sneakers/${id}`);
      }}
    >
      <img className="card-img-top" src={image} alt="Sneaker pic" />
      <div className="card-body">
        <h3 className="card-title">{model}</h3>
        <p className="card-text">{brandName}</p>
        <p className="card-text">
          <b>RWF {price}</b>
        </p>
        <p className="card-text">
          <small className="text-muted">{releaseDate}</small>
        </p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Card;
