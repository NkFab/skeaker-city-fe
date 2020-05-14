import React, { useState, useEffect } from 'react';

const ViewCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    return setCart(
      JSON.parse(localStorage.getItem('g8h0989h098h08')) || [],
    );
  }, []);
  console.log(cart);
  return (
    <div className="container">
      <div className="d-flex justify-content-center p-5">
        <table className="table col-lg-7 col-md-12 col-sm-12 mt-5">
          <tbody>
            {cart.map((cartElements) => (
              <tr key={cartElements.id}>
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
                    Model: <b>{cartElements.sneakerModel}</b>
                  </small>
                  <br />
                  <small>
                    Price: <b>{cartElements.sneakerPrice}</b>
                  </small>
                  <br />
                  <small>
                    Selected Size: <b>{cartElements.selectedSize}</b>
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
