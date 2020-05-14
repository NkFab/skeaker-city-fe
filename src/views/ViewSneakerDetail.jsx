/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropType from 'prop-types';

const BASE_URL = 'https://sneaker-city-api.herokuapp.com';

const ViewSneakerDetails = () => {
  const [sneaker, setSneaker] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [size, setSize] = useState();

  const { id } = useParams();
  const cartData = [];

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sneakers/${id}`)
      .then((res) => {
        const { data } = res;
        setSneaker(data.sneaker);
        setLoading(false);
      })
      .catch((err) => {
        const { message, error: resError } = err.response?.data;
        setError(message || resError || 'Unknow error');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="container-fluid">
      <div className="row p-lg-5">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">
              <img
                src={sneaker.main_picture_url[0]}
                alt="Sneaker pic"
                height="500"
                width="500"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p>
            <b>Box condition</b> {sneaker.box_condition}
          </p>
          <p>
            <b>Brand name</b> {sneaker.brand_name}
          </p>
          <p>
            <b>Color</b> {sneaker.color}
          </p>
          <p>
            <b>Designer</b> {sneaker.designer}
          </p>
          <p>
            <b>Name</b> {sneaker.name}
          </p>
          <p>
            <b>Nick Name</b> {sneaker.nickname}
          </p>
          <p>
            <b>Release year</b> {sneaker.release_year}
          </p>
          <p>
            <b>Price</b> {sneaker.retail_price_cents} RWF
          </p>
          <p>
            <b>Shoe condition</b> {sneaker.shoe_condition}
          </p>
          <p>
            <b>Available sizes</b>{' '}
            {sneaker.size_range.map((shoeSize) => {
              return (
                <span
                  className="badge badge-pill badge-dark mr-1"
                  onClick={() => setSize(shoeSize)}
                >
                  {shoeSize}
                </span>
              );
            })}
          </p>
          {size && <p>You selected {size}, add to cart</p>}

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              cartData.push({ selectedSize: size, sneaker: id });
              localStorage.setItem('cart', JSON.stringify(cartData));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
ViewSneakerDetails.defaultProps = {
  modelName: PropType.string.isRequired,
};

export default ViewSneakerDetails;
