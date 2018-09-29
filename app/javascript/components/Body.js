import React from 'react';
import ReactDOM from 'react-dom';
import Apartment from '../components/Apartment';
import ApartmentListings from '../components/ApartmentListings';
import NewApartment from '../components/NewApartment';
import Modal from '../components/Modal';

class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      apartments: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewApartment = this.addNewApartment.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteApartment = this.deleteApartment.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateApartment = this.updateApartment.bind(this);

  }

  handleUpdate(apartment){
    fetch(`http://localhost:5000/apartments/${apartment.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({apartment: apartment}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateApartment(apartment)
      })
  }

  updateApartment(apartment){
    let newApartments = this.state.apartments.filter((f) => f.id !== apartment.id)
    newApartments.push(apartment)
    this.setState({
      apartments: newApartments
    })
  }



  handleDelete(id){
    fetch(`http://localhost:5000/apartments/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteApartment(id)
      })
  }

  deleteApartment(id){
    newApartments = this.state.apartments.filter((apartment) => apartment.id !== id)
    this.setState({
      apartments: newApartments
    })
  }

handleFormSubmit(address, city, state, bedrooms, bathrooms){
    let body = JSON.stringify({apartment: {address: address, city: city, state: state,
      bedrooms: bedrooms, bathrooms: bathrooms} })
    fetch(`http://localhost:5000/apartments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((apartment)=>{
      this.addNewApartment(apartment)
    })
    
  
}

addNewApartment(apartment){
    this.setState({
      apartments: this.state.apartments.concat(apartment)
    })
}

componentDidMount(){
    fetch(`/apartments.json`)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ apartments: data }) });
  }
render(){
    return(
      <div>
        <NewApartment handleFormSubmit={this.handleFormSubmit}/>
        <ApartmentListings apartments={this.state.apartments} handleDelete={this.handleDelete} 
        handleUpdate = {this.handleUpdate} handleFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
}

export default Body;