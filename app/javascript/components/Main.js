import React from 'react';
import ReactDOM from 'react-dom';
import Apartment from '../components/Apartment';
import ApartmentListings from '../components/ApartmentListings';
import Body from '../components/Body';

const Main = (props) => {
    return(
      <div>
        <h1>Apartments for Rent</h1>
        <Body />
      </div>
    )
}

export default Main;