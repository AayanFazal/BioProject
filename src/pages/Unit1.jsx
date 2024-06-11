// src/pages/Unit1.jsx
import React from 'react';
import Quiz from '../components/Quiz';
import '../styles/UnitPage.css';
import eagleGif from '../images/eagle.gif'; // Import GIF file
import trophic from '../images/trophic.png'; 

const Unit1 = () => {

  const unit1Questions = [
    {
      question: "What is the primary purpose of food chains in ecosystems ?",
      options: ["Illustrate complexity of feeding relationships", "Demonstrate interconnection between trophic levels", "Trace the flow of energy from one organism to another"],
      correct: 2 // Index of the correct option
    },
    {
      question: "Why is predation important for the balance of ecosystems?",
      options: ["To control the numbers of prey species and regulate the entire food chain. ", "To ensure the survival of predator species.", "To showcase the hierarchy of predator-prey relationships."],
      correct: 0 // Index of the correct option
    },
    {
      question: "Chemical formula for Photosynthesis",
      options: ["C6H12O6 + 6 O2 →6 CO2 + 6 H2O + energy ", "6 CO2 + 6 H2O + energy → C6H12O6 + 6 O2", "6 CO2 + 6 H2O + ATP → C6H12O6 + 6 O2"],
      correct: 1 // Index of the correct option
    }
  ];

  return (
    <div className="unit-page">
      <div className="content-container">
        <div className="title-container">
          <h1 className="unit-title"><i>  Unit 1: Energy Flow, Predation, Energy Proccessing</i></h1>
        </div>
        <div className="sub-section">
          <h2>Energy Flow</h2>
          <div className="image-container">
          <img src={trophic} height="270" width="480"/>
          </div>
          <p>
          In ecosystems, energy and matter flow through various trophic levels, as depicted by food chains, food webs, and trophic pyramids. Food chains illustrate this flow by tracing the transfer of energy from one organism to another as they consume each other. However, energy isn't transferred with 100% efficiency at each step; some energy is lost as heat or used for metabolic processes, resulting in less energy available for the next trophic level. This loss of energy is evident when we examine trophic pyramids, where each successive level typically contains less energy and biomass than the one below it. For instance, as we move from producers (like plants) to primary consumers (herbivores) to secondary consumers (carnivores), energy decreases due to inefficiencies in energy transfer. Therefore, while producers play a crucial role in initiating energy flow, much of the energy is lost as it moves up the trophic pyramid, emphasizing the importance of understanding energy dynamics in ecosystems for their structure and functioning.
          </p>
        </div>
        <div className="sub-section">
          <h2>Predation</h2>
          <div className="image-container">
            <img src={eagleGif} />
          </div>
          <p>
          Predation is like nature's version of a dinner table, where one animal hunts and eats another for its meal. Take, for instance, a fox hunting a rabbit. When the fox catches and devours the rabbit, it gains energy and also absorbs the nutrients and matter from the rabbit's body, which helps the fox grow and survive. This exchange of energy and matter is crucial for the balance of the ecosystem. Just like how a balanced diet keeps us healthy, predators help control the numbers of their prey, which in turn affects the whole food chain. So, predation isn't just about who eats whom; it's about how energy and nutrients move around in nature, playing a vital role in keeping ecosystems healthy and balanced.
          </p>
        </div>
        <div className="sub-section">
          <h2>Energy Processing</h2>
          <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CMiPYHNNg28?si=w5TwhOI1rFkLxap0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
          Gas exchange and photosynthesis are crucial energy processing mechanisms in ecosystems, showcasing the intimate relationship between energy and matter. Gas exchange, such as respiration in animals, involves the intake of oxygen and release of carbon dioxide, facilitating the production of energy while manipulating matter. Similarly, photosynthesis in plants captures solar energy to convert carbon dioxide and water into glucose and oxygen, as described by the chemical equation: (6 CO2 + 6 H2O + energy → C6H12O6 + 6 O2). This equation illustrates the transformation of energy from sunlight into chemical energy stored in glucose, with matter being intricately involved in the process. These processes highlight how energy and matter interact in biological systems, shaping the flow of energy and cycling of nutrients essential for sustaining life within ecosystems.
          </p>
        </div>
        <div className="quiz-box">
          <Quiz questions={unit1Questions} /> {/* Pass quiz questions as prop */}
        </div>
      </div>
    </div>
  );
};

export default Unit1;
