// src/pages/Unit1.jsx
import React from 'react';
import Quiz from '../components/Quiz';
import '../styles/UnitPage.css';
import eagleGif from '../images/eagle.gif'; // Import GIF file
import trophic from '../images/trophic.png'; 
import respiration from '../images/respiration.jpg'; 
import people from '../images/people.jpg';

const Unit2 = () => {

  const unit2Questions = [
    {
      question: "What are the primary reactants involved in cellular respiration?",
      options: ["Carbon dioxide and water", "Glucose and oxygen", "ATP and adenosine"],
      correct: 1 // Index of the correct option
    },
    {
      question: "How does the balance of energy from the sun with climate and weather systems help maintain balance on our planet?",
      options: ["By controlling the intensity of solar radiation reaching Earth's surface, preventing extreme weather events.", "By ensuring stable temperatures and weather conditions year-round.", "By regulating the distribution of heat and moisture, which affects ecosystems and habitats. "],
      correct: 2 // Index of the correct option
    },
    {
      question: "How do population dynamics, such as overpopulation and competition, influence the flow of energy and matter within ecosystems?",
      options: ["Overpopulation increases energy availability at lower trophic levels, while competition among predators reduces energy flow to higher trophic levels.", "Overpopulation results in higher energy consumption by predators, while competition among prey species increases energy availability at lower trophic levels.", "Overpopulation leads to a surplus of energy at higher trophic levels, while competition reduces energy availability across all trophic levels."],
      correct: 0 // Index of the correct option
    }
  ];

  return (
    <div className="unit-page">
      <div className="content-container">
        <div className="title-container">
          <h1 className="unit-title"><i>  Unit 2: Cell Respiration, Our Planet, Population </i></h1>
        </div>
        <div className="sub-section">
          <h2>Cell Respiration</h2>
          <div className="image-container">
          <img src={respiration}/>
          </div>
          <p>
          Cellular respiration is a fundamental process in organisms that involves the conversion of chemical energy stored in organic molecules, such as glucose, into usable energy in the form of ATP (adenosine triphosphate), while also involving the exchange of matter. The overall chemical equation for cellular respiration is: C6H12O6 + 6O2 → 6CO2+6H2O +energy. In this equation, glucose (C6H12O6) and oxygen (O2) are the reactants, while carbon dioxide (CO2) and water (H2O) are the products. Through this process, energy is released and utilized by cells for various functions, such as growth, reproduction, and movement, demonstrating the intimate relationship between energy and matter in biological systems.
          </p>
        </div>
        <div className="sub-section">
          <h2>Our Planet</h2>
          <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TIVZysDfoDk?si=UX9GxPhRzKho9AmS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
          The sun is like our planet's engine, providing the energy that keeps things running smoothly. This energy drives our climate and weather, making sure everything stays balanced. Climate is the long-term average of weather in an area, and it's influenced by how the sun heats up different parts of the Earth. This heating creates patterns in the atmosphere and oceans that move heat and moisture around, affecting things like temperature and rainfall. Weather, on the other hand, is what we experience day to day - like rain, wind, or sunshine. By balancing the energy from the sun with how it's distributed through climate and weather, our planet keeps everything in check, ensuring that life can thrive in all its diverse forms (i.e maintaining spheres = Goldilocks planet).
          </p>
        </div>
        <div className="sub-section">
          <h2>Population</h2>
          <div className="image-container">
          <img src={people}/>
          </div>
          <p>
          Population dynamics, particularly overpopulation and competition, significantly influence the flow of energy and matter within ecosystems, particularly at different trophic levels. When prey populations increase due to factors like abundant resources, more energy becomes available at lower trophic levels, leading to higher reproduction rates and biomass among prey species. Conversely, an increase in predator populations, often in response to a rise in prey abundance, leads to higher energy consumption at higher trophic levels. As predators consume more prey, energy is transferred up the food chain, influencing the balance of energy and matter within the ecosystem. Additionally, fluctuations in birth and death rates within populations impact resource availability and energy flow, as increased births lead to higher resource consumption and energy utilization, while deaths contribute to energy recycling through processes like decomposition, affecting the overall structure and functioning of the ecosystem.
          </p>
        </div>
        <div className="quiz-box">
          <Quiz questions={unit2Questions} /> {/* Pass quiz questions as prop */}
        </div>
      </div>
    </div>
  );
};

export default Unit2;
