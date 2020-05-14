import React, { useState, useEffect } from 'react';

const ViewCart = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      return setError('Nothing in the cart yet.');
    }
    return setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-5">
        <table className="table col-lg-7 col-md-12 col-sm-12">
          <tbody>
            {error}
            {cart.map((cartElements) => (
              <tr>
                <td>
                  <img
                    src={cartElements.sneakerImg}
                    alt="Sneaker pic"
                    height="150"
                    width="150"
                  />
                </td>
                <td>
                  <small>
                    <b>{cartElements.sneakerModel}</b>
                  </small>
                  <br />
                  <small>
                    <b>{cartElements.sneakerPrice}</b>
                  </small>
                  <br />
                  <small>
                    <b>{cartElements.selectedSize}</b>
                  </small>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCart;
