import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/Detail.css';

export default function Detail(props) {

  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
      <div>
      <button onClick={openModal}>Open</button>
      <Modal
        isOpen={open}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(100, 100, 100, 0.75)',
	    outline: 'none',
	  },
	  content: {
            background: 'rgba(100, 100, 100, 0.0)',
	  }
        }}
      >
      </Modal>
    </div>
  );
}
