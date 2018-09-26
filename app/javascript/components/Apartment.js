import React from 'react';

class Apartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         address: this.props.address
         city: this.props.city
         state: this.props.state
         bedrooms: this.props.bedrooms
         bathrooms: this.props.bathrooms
      }
  };

  render() {
    return (
      <div>
        <h4>{this.state.address} {this.state.city} {this.state.state} {this.state.bedrooms} {this.state.bathrooms} </h4>
      </div>
    )
  };
}

export default Apartment;