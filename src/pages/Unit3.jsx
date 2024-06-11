// src/pages/Unit1.jsx
import React from 'react';
import Quiz from '../components/Quiz';
import '../styles/UnitPage.css';
import eagleGif from '../images/eagle.gif'; // Import GIF file
import trophic from '../images/trophic.png'; 

const Unit3 = () => {

  const unit3Questions = [
    {
      question: "How does cell specialization contribute to the efficient utilization of energy and matter within organisms?",
      options: ["By synthesizing proteins needed for various cellular functions in specialized structures like ribosomes.", "By facilitating energy transfer and matter exchange across different cell types and body compartments.", " By optimizing energy production in specialized organelles like mitochondria."],
      correct: 1 // Index of the correct option
    },
    {
      question: "How does a disruption in ATP production affect cell division in organisms with diseases, viruses, or bacteria?",
      options: ["It slows down the process of cell division because cells don't have enough energy.", "It doesn't affect cell division at all.", "It speeds up the process of cell division."],
      correct: 0 // Index of the correct option
    },
    {
      question: "How do energy and matter contribute to the cell cycle?",
      options: ["Energy in the form of ATP and matter like nutrients and building blocks are essential for DNA replication, mitosis, and cytokinesis.", "Only energy is needed for the cell cycle, as cells do not require matter to grow and divide.", "Matter is required for the cell cycle, but energy is not necessary for cellular processes."],
      correct: 0 // Index of the correct option
    }
  ];

  return (
    <div className="unit-page">
      <div className="content-container">
        <div className="title-container">
          <h1 className="unit-title"><i>  Unit 3: Cell Specialization, D.V.B, Cell Cycle </i></h1>
          <p className="unit-description">*D.V.B = Disease, Viruses and Bacteria</p>
        </div>
        <div className="sub-section">
          <h2>Cell Specialization</h2>
          <div className="image-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wNe6RuK0FfA?si=teYPwXX8GTfauGMf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
Cell specialization, evident in the structure and function of cells, plays a crucial role in managing energy and matter within organisms. Specialized structures like mitochondria efficiently produce energy, while organelles like ribosomes synthesize proteins needed for various cellular functions. This specialization ensures that energy and matter are utilized effectively for processes like growth, reproduction, and repair. Moreover, at higher levels of organization, such as tissues and organs, specialized cells collaborate to facilitate energy transfer and matter exchange, ensuring the overall functioning and homeostasis of the organism. Which is why cell specializaition is important to energy and matter in biology. 
          </p>
        </div>
        <div className="sub-section">
          <h2>Disease, Viruses and Bacteria</h2>
          <div className="image-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mQZDyLtCu5E?si=WiV16ZL3rr_2mO_J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
          In organisms affected by diseases, viruses, or bacteria, disruptions in ATP production can significantly impact the energy required for cell division compared to healthy organisms. ATP, the energy currency of cells, is essential for various cellular processes, including cell division. Without a steady production of ATP, cells lack the energy necessary to undergo the complex processes involved in cell division, such as DNA replication. As a result, the rate of cell division in affected organisms decreases, leading to impaired growth, tissue repair, and overall function. This means that the body might not be able to repair itself or grow like it should. So, it's like a domino effect: when energy production goes down, it affects how cells use resources and materials for cell division, which is really important for keeping the body healthy and working right.
          </p>
        </div>
        <div className="sub-section">
          <h2>Cell Cycle</h2>
          <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QVCjdNxJreE?si=Gs-_a9Gu1Yrp3-Zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
          The cell cycle is a series of stages that cells go through to grow and divide, and it relies heavily on both energy and matter. Cells use energy, primarily in the form of ATP, to drive the processes involved in the cell cycle, such as DNA replication, mitosis, and cytokinesis. This energy is necessary for the synthesis of new cellular components and for the machinery that separates chromosomes. Additionally, cells require a steady supply of matter, including nutrients and building blocks like proteins and nucleotides, to create new DNA and cellular structures. Together, energy and matter are essential for cells to successfully complete the cell cycle, enabling growth, repair, and reproduction in living organisms.
          </p>
        </div>
        <div className="quiz-box">
          <Quiz questions={unit3Questions} /> {/* Pass quiz questions as prop */}
        </div>
      </div>
    </div>
  );
};

export default Unit3;
