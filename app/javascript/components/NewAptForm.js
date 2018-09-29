import React from 'react';
import ReactDOM from 'react-dom';



const NewAptForm = (props) => {

  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.address.value, 
      formFields.city.value, formFields.state.value, formFields.bedrooms.value,
      formFields.bathrooms.value); e.target.reset();}
  }>
     <input ref={input => formFields.address = input} placeholder='Address: '/>
     <input ref={input => formFields.city = input} placeholder='City: ' />
     <input ref={input => formFields.state = input} placeholder='State: '/>
     <input ref={input => formFields.bedrooms = input} placeholder='Number of Bedrooms: '/>
     <input ref={input => formFields.bathrooms = input} placeholder='Number of Bathrooms: '/>
     <button onClick={ () => 
      props.handleFormSubmit(formFields.address.value, formFields.city.value, formFields.state.value,
        formFields.bedrooms.value, formFields.bathrooms.value)}>Submit</button>
    </form>
  )
}


export default NewAptForm;