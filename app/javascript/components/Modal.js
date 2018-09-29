import React from 'react';
import ReactDOM from 'react-dom';
import NewAptForm from '../components/NewAptForm';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
  	//Need to put form in here, form will be a child as modal displays whatever we give it as a child
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;