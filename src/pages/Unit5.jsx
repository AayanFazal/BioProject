// src/pages/Unit1.jsx
import React from 'react';
import Quiz from '../components/Quiz';
import '../styles/UnitPage.css';
import eagleGif from '../images/eagle.gif'; // Import GIF file
import trophic from '../images/trophic.png'; 
import repro from '../images/repro.png';
import evol from '../images/evol.gif';  
import vari from '../images/var.gif'; 

const Unit5 = () => {

  const unit5Questions = [
    {
      question: "How does the interaction between energy and matter influence reproductive success and species survival?",
      options: ["The availability of energy and matter has no impact on reproductive success or species survival.", "The interaction between energy and matter is crucial for reproductive success, ultimately influencing species survival and evolutionary fitness.", "Reproductive success and species survival are solely determined by genetic factors and do not involve energy or matter considerations."],
      correct: 1 // Index of the correct option
    },
    {
      question: "How are energy, matter, and evolution connected?",
      options: ["Energy and matter have no impact on evolution.", "Evolutionary changes occur independently of energy and matter considerations." , "Evolution is influenced by changes in energy and matter in the environment, as organisms adapt to acquire and utilize resources efficiently."],
      correct: 2 // Index of the correct option
    },
    {
      question: "How does the interaction of energy and matter contribute to variation within populations?",
      options: [" Environmental factors such as availability of nutrients and habitat conditions influence energy and matter acquisition, shaping physical characteristics and genetic makeup, leading to variation within populations. ", "Variation within populations is independent of energy and matter interactions in the environment.", "Variation within populations is solely determined by genetic factors and does not involve energy or matter considerations."],
      correct: 0 // Index of the correct option
    }
  ];

  return (
    <div className="unit-page">
      <div className="content-container">
        <div className="title-container">
          <h1 className="unit-title"><i>  Unit 5: Reproductive Advantage, Evolution, Variation </i></h1>
        </div>
        <div className="sub-section">
          <h2>Reproductive Advantage</h2>
          <div className="image-container">
          <img src={repro} height="270" width="480"/>
          </div>
          <p>
          Reproductive advantage in species is closely linked to the availability of energy and matter. Reproduction requires significant energy, as organisms must allocate resources to produce and nurture offspring. In environments where resources are abundant, species with high reproductive rates can use the available energy to produce more offspring, increasing their chances of survival and passing on their genes. Competition for resources also plays a role, as species that can efficiently convert matter (nutrients) into energy for reproduction gain an advantage.Therefore, the interaction between energy and matter plays a vital role in determining reproductive success, ultimately impacting species survival and evolutionary fitness.
          </p>
        </div>
        <div className="sub-section">
          <h2>Evolution</h2>
          <div className="image-container">
            <img src={evol} />
          </div>
          <p>
          Evolution, the process of how organisms change over time, is closely tied to energy and matter. Organisms need energy for growth, reproduction, and staying healthy, while matter like nutrients is essential for building and maintaining their bodies. Changes in the environment's energy and matter can lead to evolutionary adaptations. For example, if there's not enough food, organisms might evolve ways to use less energy or find new sources of nutrients. Also, competition for resources can drive organisms to develop better ways to get energy and matter from their surroundings. So, energy, matter, and evolution all work together to shape life on Earth.
          </p>
        </div>
        <div className="sub-section">
          <h2>Variation</h2>
          <div className="video-container">
          <img src={vari} />
          </div>
          <p>
          
Variation, the diversity of traits within a population, is closely tied to the interplay of energy and matter. Organisms obtain energy and matter from their environment, which influences their growth, development, and the expression of traits. Environmental factors such as availability of nutrients, temperature, and habitat conditions affect the resources available to organisms, shaping their physical characteristics and genetic makeup. Additionally, variations in energy acquisition and metabolism can lead to differences in traits such as size, color, and behavior among individuals within a population. These variations provide the raw material for natural selection and evolution to act upon, ultimately driving the adaptation of species to their environments.
          </p>
        </div>
        <div className="quiz-box">
          <Quiz questions={unit5Questions} /> {/* Pass quiz questions as prop */}
        </div>
      </div>
    </div>
  );
};

export default Unit5;
