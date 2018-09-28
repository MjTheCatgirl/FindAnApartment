import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/Modal';

class NewApartment extends Component {
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

export default NewApartment;