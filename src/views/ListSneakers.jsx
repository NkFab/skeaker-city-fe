/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const BASE_URL = 'https://sneaker-city-api.herokuapp.com';
class ListSneakers extends Component {
  state = {
    sneakers: [],
    pageNumber: 1,
    isLoading: false,
  };

  componentDidMount() {
    this.loadSneakers();
  }

  loadSneakers() {
    this.setState({ isLoading: true });
    const { pageNumber } = this.state;
    axios
      .get(`${BASE_URL}/api/sneakers?page=${pageNumber}`)
      .then((sneakers) => {
        this.setState({
          isLoading: false,
          sneakers: sneakers.data.sneakers.docs,
        });
      });
  }

  render() {
    const { sneakers, isLoading } = this.state;
    return (
      <div className="container-fluid p-0">
        <div className="d-flex flex-wrap">
          {sneakers.map((sneaker) => {
            return (
              <Card
                image={sneaker.grid_picture_url}
                model={sneaker.name}
                brandName={sneaker.brand_name}
                releaseDate={sneaker.release_date}
                price={sneaker.retail_price_cents}
                id={sneaker._id}
                key={sneaker._id}
              />
            );
          })}
        </div>
        {isLoading && (
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: '40vh' }}
          >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListSneakers;
