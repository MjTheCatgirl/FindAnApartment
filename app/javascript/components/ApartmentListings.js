import React from 'react';
import ReactDOM from 'react-dom'

class ApartmentListings extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
      	apartments: []
    	};
  	}

	componentDidMount(){
    	fetch('/apartments.json')
      	.then((response) => {return response.json()})
      	.then((data) => {this.setState({ apartments: data }) });
 	 }

 	 render(){
 		var apartments = this.state.apartments.map((apartment) => {
  		return(
   			<div key={apartment.id}>
   			 <h3>{apartment.address}</h3>
   			 <h3>{apartment.city}</h3>
   			 <h3>{apartment.state}</h3>
   			 <h3>{apartment.bedrooms}</h3>
   			 <h3>{apartment.bathrooms}</h3>
   			</div>
  		)
	 })
 	return(
  		<div>
   		{apartments}
  		</div>
 	)
	}

}

export default ApartmentListings;