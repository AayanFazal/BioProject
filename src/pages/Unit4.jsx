// src/pages/Unit1.jsx
import React from 'react';
import Quiz from '../components/Quiz';
import '../styles/UnitPage.css';
import eagleGif from '../images/eagle.gif'; // Import GIF file
import trophic from '../images/trophic.png'; 
import dna from '../images/dna.jpg';
import mutation from '../images/mutation.jpg'; 

const Unit4 = () => {

  const unit4Questions = [
    {
      question: "How are energy and matter involved in the structure and function of DNA?",
      options: [" DNA's double helix is made of nucleotides (matter) and requires ATP (energy) for processes like replication and transcription.", " DNA does not require any energy for its replication and transcription.", "Only proteins are involved in the structure of DNA, with no need for energy or other matter."],
      correct: 0 // Index of the correct option
    },
    {
      question: "How do energy and matter interact to influence mutations within cells?",
      options: ["DNA replication requires energy (ATP), and errors leading to mutations can occur due to the instability of nucleotides or external factors, with repair mechanisms using energy and proteins to correct these errors.", "Mutations are solely caused by external factors like radiation and do not involve the use of energy or matter within cells.", "Energy and matter are not involved in the process of mutations."],
      correct: 0 // Index of the correct option
    },
    {
      question: "How do energy and matter contribute to the process of DNA synthesis ?",
      options: ["DNA synthesis relies on proteins and nucleotides (matter) to assemble new DNA strands and requires ATP (energy) to unwind the DNA helix and ensure accurate replication.", "DNA synthesis does not require energy and only needs nucleotides to build new DNA strands.", "DNA synthesis relies solely on energy, with no need for proteins or nucleotides."],
      correct: 0 // Index of the correct option
    }
  ];

  return (
    <div className="unit-page">
      <div className="content-container">
        <div className="title-container">
          <h1 className="unit-title"><i>  Unit 4: DNA Structure, Mutations, DNA Synthesis </i></h1>
        </div>
        <div className="sub-section">
          <h2>DNA Structure</h2>
          <div className="image-container">
          <img src={dna} height="270" width="480"/>
          </div>
          <p>
          DNA structure is intricately connected to the concepts of energy and matter. At its basic level, DNA is composed of nucleotides, which are the building blocks (matter) that form the double helix. This detailed structure includes a sugar-phosphate backbone and nitrogenous bases (adenine, thymine, cytosine, and guanine) that pair specifically to encode genetic information. The process of DNA replication and transcription into RNA requires energy in the form of ATP to unwind the double helix and to synthesize new strands. Proteins, which are made based on the instructions in DNA, also play crucial roles in these processes. Enzymes like DNA polymerase (proteins) facilitate the replication process, ensuring accurate copying of genetic material. Thus, the structure and function of DNA, along with protein synthesis, highlight the essential roles of both energy and matter in the maintenance and expression of genetic information.
          </p>
        </div>
        <div className="sub-section">
          <h2>Mutatations</h2>
          <div className="image-container">
            <img src={mutation} />
          </div>
          <p>
          Mutations, changes in the DNA sequence, are directly related to energy and matter within cells. The process of DNA replication, which requires energy in the form of ATP, sometimes introduces errors, leading to mutations. These errors can occur due to the inherent instability of the nucleotides (matter) or external factors like radiation and chemicals that alter the DNA structure. Repair mechanisms, which also consume energy and involve specific proteins (matter), work to correct these mutations. If not corrected, mutations can alter the genetic information encoded in DNA, impacting the synthesis of proteins and the overall function of the organism. Thus, mutations exemplify how energy and matter interact to influence genetic stability and variability.
          </p>
        </div>
        <div className="sub-section">
          <h2>DNA Synthesis</h2>
          <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8kK2zwjRV0M?si=fpOMsIjbxS4Br3Jd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
          DNA synthesis, essential for cell replication and growth, relies heavily on both energy and matter. During DNA synthesis, the enzyme DNA polymerase (a protein) assembles nucleotides (matter) into a new strand based on the template strand. Genes, which are specific sequences of DNA, guide this process, ensuring accurate copying of genetic information. This entire process requires significant energy, primarily in the form of ATP, to unwind the DNA helix, attach nucleotides, and proofread the newly formed DNA strand. Therefore, energy is crucial for creating more cells, while matter, in the form of nucleotides and proteins, is necessary to build and maintain the structure of DNA, ensuring successful DNA synthesis and cell replication.
          </p>
        </div>
        <div className="quiz-box">
          <Quiz questions={unit4Questions} /> {/* Pass quiz questions as prop */}
        </div>
      </div>
    </div>
  );
};

export default Unit4;
