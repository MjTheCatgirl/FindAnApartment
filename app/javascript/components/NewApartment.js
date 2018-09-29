import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/Modal';
import NewAptForm from '../components/NewAptForm';

class NewApartment extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal className="modal" show={this.state.show} handleClose={this.hideModal}>
          <NewAptForm />
        </Modal>
        <button type="button" onClick={this.showModal}>
          add new listing
        </button>
      </main>
    );
  }
}

export default NewApartment;