import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://sneaker-city-api.herokuapp.com';

const ViewCart = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let cart = [];
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  } else {
    return <h1>No items in the cart</h1>;
  }

  console.log(sneakers, 'data');
  return (
    <div className="container">
      <div className="d-flex justify-content-center p-5">
        <div className="jumbotron col-lg-6 mt-2">
          <img src="" alt="Sneaker pic" height="500" width="500" />
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
