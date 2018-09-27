import React from 'react';
import ReactDOM from 'react-dom'
import Apartment from '../component/Apartment';

const ApartmentListings = (props) => {
  var apartments = props.apartments.map((apartment) => {
    return(
      <div key={apartment.id}>
        <Apartment apartment={apartment} handleDelete={props.handleDelete} 
        handleUpdate={props.handleUpdate}/>
      </div>
    )
  })
return(
      <div>
        {apartments}
      </div>
    )
  }

export default ApartmentListings;