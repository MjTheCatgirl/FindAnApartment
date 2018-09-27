import React from 'react';
import ReactDOM from 'react-dom';

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
    defaultValue={this.props.apartment.city}/>:<p>{this.props.apartment.city}</p>
    let state = this.state.editable ? <input type='text' ref={input => this.state = input} 
    defaultValue={this.props.apartment.state}/>:<p>{this.props.apartment.state}</p>
    let bedrooms = this.state.editable ? <input type='text' ref={input => this.bedrooms = input} 
    defaultValue={this.props.apartment.bedrooms}/>:<p>{this.props.apartment.bedrooms}</p>
    let bathrooms = this.state.editable ? <input type='text' ref={input => this.bathrooms = input} 
    defaultValue={this.props.apartment.bathrooms}/>:<p>{this.props.apartment.bathrooms}</p>

    return(
      <div>
        {address}
        {city}
        {state}
        {bedrooms}
        {bathrooms}
        <button onClick={() => this.handleEdit()}>
        <button>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.apartment.id)}>Delete</button>
      </div>
    )      
  }
}

export default Apartment;