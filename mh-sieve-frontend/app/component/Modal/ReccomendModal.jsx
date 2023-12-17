import React, { useState } from 'react';
import Modal from 'react-modal';
import { PlaylistRating } from '../Rating/Rating';
import { FaRegStar } from "react-icons/fa";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none', // Set background to none so it doesn't block the overlay
    border: 'none', // Remove border
    padding: '100px', // Add 100px padding
  },
};

const buttonStyle = {
  margin: '5px',
  padding: '18px 15px',
  fontSize: '16px',
  backgroundColor: '#ffffff', // White background
  color: '#000000', // Black text
  borderRadius: '5px',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)', // 6 columns
  gap: '10px', // Gap between buttons
};

const techEducationalRecommendations = {
  categories: ["Programming", "Development", "Computer Science", "Engineering"],
  languages: ["English", "Hindi", "Bengali", "Telugu", "Tamil"],
  difficultyLevels: ["Beginner", "Intermediate", "Advanced"],
  programmingLanguages: ["JavaScript", "Python", "Java", "C++", "Ruby", "HTML/CSS"],
  frameworks: ["React", "Angular", "Vue", "Django", "Ruby on Rails", "Spring"],
  topics: ["Machine Learning", "Data Structures", "Algorithms", "Cybersecurity", "Web Development", "Cloud Computing", "Engineering Mathematics"],
};


const ModalComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

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
      {/* <button onClick={openModal}><FaRegStar /></button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={gridContainerStyle}>
          {techEducationalRecommendations.categories.map((category, index) => (
            <button key={index} style={buttonStyle}>
              {category}
            </button>
          ))}
          {techEducationalRecommendations.languages.map((category, index) => (
            <button key={index} style={buttonStyle}>
              {category}
            </button>
          ))}
          {techEducationalRecommendations.difficultyLevels.map((category, index) => (
            <button key={index} style={buttonStyle}>
              {category}
            </button>
          ))}
          {techEducationalRecommendations.programmingLanguages.map((category, index) => (
            <button key={index} style={buttonStyle}>
              {category}
            </button>
          ))}
          {techEducationalRecommendations.frameworks.map((category, index) => (
            <button key={index} style={buttonStyle}>
              {category}
            </button>
          ))}
          {techEducationalRecommendations.topics.map((category, index) => (
            <button key={index} style={buttonStyle}>
              {category}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
