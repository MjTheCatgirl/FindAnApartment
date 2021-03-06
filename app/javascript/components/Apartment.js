import React from 'react';
import ReactDOM from 'react-dom';
import NewApartment from '../components/NewApartment';
import Modal from '../components/Modal';

class Apartment extends React.Component{
  
constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let address = this.address.value
      let city = this.city.value
      let state = this.state.value
      let bedrooms = this.bedrooms.value
      let bathrooms = this.bathrooms.value
      let id = this.props.apartment.id
      let apartment = {id: id, address: address, city: city, state: state, bedrooms: bedrooms, 
      	bathrooms: bathrooms}
      this.props.handleUpdate(apartment)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  

  render(){
  	let address = this.state.editable ? <input type='text' ref={input => this.name = input} 
  	defaultValue={this.props.apartment.address}/>:<h3>{this.props.apartment.address}</h3>
    let city = this.state.editable ? <input type='text' ref={input => this.city = input} 
    defaultValue={this.props.apartment.city}/>:<h3>{this.props.apartment.city}</h3>
    let state = this.state.editable ? <input type='text' ref={input => this.state = input} 
    defaultValue={this.props.apartment.state}/>:<h3>{this.props.apartment.state}</h3>
    let bedrooms = this.state.editable ? <input type='text' ref={input => this.bedrooms = input} 
    defaultValue={this.props.apartment.bedrooms}/>:<h3>{this.props.apartment.bedrooms}</h3>
    let bathrooms = this.state.editable ? <input type='text' ref={input => this.bathrooms = input} 
    defaultValue={this.props.apartment.bathrooms}/>:<h3>{this.props.apartment.bathrooms}</h3>

    return(
      <div>
        {address}
        {city}
        {state}
        {bedrooms}
        {bathrooms}
        <button onClick={() => this.handleEdit()}></button>
        <button>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.apartment.id)}>Delete</button>
      </div>
    )      
  }
}

export default Apartment;