class Apartment extends React.Component {
  constructor(props) {
    super(props);
    };
  }

  render() {
    return (
      <div>
        <h3 Address: {this.address}, City: {this.city}, State: {this.state}, Bedrooms: {this.bedrooms}, Bathrooms: {this.bathrooms} /h3>
      </div>
    )
  }
}

export default Apartment;