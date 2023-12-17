import React, { useState } from 'react';
import Modal from 'react-modal';
import { PlaylistRating } from '../Rating/Rating';
import { FaRegStar } from "react-icons/fa";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};




const ModalComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="star-rating-button">
       Rate this  <FaRegStar /> 
      </button>
      <Modal

        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PlaylistRating />
      </Modal>
    </div>
  );
};

export default ModalComponent;
