'use client'

import { useState } from 'react';
import { FaFilePdf, FaExternalLinkAlt, FaQuoteRight, FaCopy, FaTimes } from 'react-icons/fa';

// Add Modal state type
type ModalState = {
  isOpen: boolean;
  bibtex: string | null;
};

// Define the Publication type
type Publication = {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  pdfUrl?: string;
  publicationUrl?: string;
  tags?: string[];
  bibtex?: string;
};

// Sample publications data
const publications: Publication[] = [
  {
    title: "A Visual Analytic in Deep Learning Approach to Eye Movement for Human-Machine Interaction Based on Inertia Measurement",
    authors: [
      "Shahriar Rahman Fahim",
      "Dristi Datta",
      "MD Rafiqul Islam Sheikh",
      "Sanjay Dey",
      "Yeahia Sarker",
      "Subrata K Sarker",
      "Faisal R Badal",
      "Sajal K Das"
    ],
    journal: "IEEE Access",
    year: 2020,
    abstract: "A novel approach using deep learning and visual analytics for eye movement tracking in human-machine interaction systems based on inertial measurement units.",
    publicationUrl: "https://ieeexplore.ieee.org/document/9042233",
    tags: ["Deep Learning", "Human-Machine Interaction", "Eye Tracking", "Visual Analytics", "Inertial Measurement"],
    bibtex: `@article{fahim2020visual,
  title={A visual analytic in deep learning approach to eye movement for human-machine interaction based on inertia measurement},
  author={Fahim, Shahriar Rahman and Datta, Dristi and Sheikh, MD Rafiqul Islam and Dey, Sanjay and Sarker, Yeahia and Sarker, Subrata K and Badal, Faisal R and Das, Sajal K},
  journal={IEEE Access},
  volume={8},
  pages={45924--45937},
  year={2020},
  publisher={IEEE}
}`
  },
  {
    title: "Self Attention Convolutional Neural Network with Time Series Imaging Based Feature Extraction for Transmission Line Fault Detection and Classification",
    authors: [
      "Shahriar Rahman Fahim",
      "Yeahia Sarker",
      "Subrata K Sarker",
      "Md Rafiqul Islam Sheikh",
      "Sajal K Das"
    ],
    journal: "Electric Power Systems Research",
    year: 2020,
    abstract: "A novel approach combining self-attention mechanisms with CNNs for power system fault detection and classification using time series imaging techniques.",
    publicationUrl: "https://doi.org/10.1016/j.epsr.2020.106437",
    tags: ["Deep Learning", "Power Systems", "Fault Detection", "Self-Attention", "CNN"],
    bibtex: `@article{fahim2020self,
  title={Self attention convolutional neural network with time series imaging based feature extraction for transmission line fault detection and classification},
  author={Fahim, Shahriar Rahman and Sarker, Yeahia and Sarker, Subrata K and Sheikh, Md Rafiqul Islam and Das, Sajal K},
  journal={Electric Power Systems Research},
  volume={187},
  pages={106437},
  year={2020},
  publisher={Elsevier}
}`
  },
  {
    title: "Graph Neural Network: A Comprehensive Review on Non-Euclidean Space",
    authors: [
      "Nurul A Asif",
      "Yeahia Sarker",
      "Ripon K Chakrabortty",
      "Michael J Ryan",
      "Md Hafiz Ahamed",
      "Dip K Saha",
      "Faisal R Badal",
      "Sajal K Das",
      "Md Firoz Ali",
      "Sumaya I Moyeen"
    ],
    journal: "IEEE Access",
    year: 2021,
    abstract: "A comprehensive review of Graph Neural Networks focusing on their applications and methodologies in non-Euclidean space.",
    publicationUrl: "https://ieeexplore.ieee.org/document/9393454",
    tags: ["Graph Neural Networks", "Deep Learning", "Non-Euclidean Geometry", "Survey"],
    bibtex: `@article{asif2021graph,
  title={Graph Neural Network: A Comprehensive Review on Non-Euclidean Space},
  author={Asif, Nurul A and Sarker, Yeahia and Chakrabortty, Ripon K and Ryan, Michael J and Ahamed, Md Hafiz and Saha, Dip K and Badal, Faisal R and Das, Sajal K and Ali, Md Firoz and Moyeen, Sumaya I and others},
  journal={IEEE Access},
  volume={9},
  pages={60588--60606},
  year={2021},
  publisher={IEEE}
}`
  },
  {
    title: "Energy-Based Generative Models with Morphological Attention Networks for Hyperspectral Image Classification: A Unified Framework",
    authors: ["Yeahia Sarker", "Mohammad Arif Hossain"],
    journal: "International Conference on Image Processing",
    year: 2024,
    abstract: "This paper presents a novel approach to computer vision using advanced deep learning techniques, demonstrating significant improvements in accuracy and computational efficiency compared to existing methods.",
    pdfUrl: "#",
    publicationUrl: "#",
    tags: ["Deep Generative Models", "Energy-based Models", "Attention Mechanism", "Morphogical Operations"],
    bibtex: `@inproceedings{sarker2024energy,
      title={Energy-Based Generative Models with Morphological Attention Networks for Hyperspectral Image Classification: A Unified Framework},
      author={Sarker, Yeahia and Hossain, Mohammad Arif},
      booktitle={International Conference on Image Processing},
      year={2024}
    }`
  },
  {
    title: "An Intelligent Approach of Fault Classification and Localization of a Power Transmission Line",
    authors: [
      "Shahriar Rahman Fahim",
      "Yeahia Sarker",
      "Omar Kamrul Islam",
      "Subrata K Sarker",
      "Md Fatin Ishraque",
      "Sajal K Das"
    ],
    journal: "2019 IEEE International Conference on Power, Electrical, and Electronics and Industrial Applications (PEEIACON)",
    year: 2019,
    abstract: "A novel intelligent approach for power transmission line fault classification and localization using advanced machine learning techniques.",
    publicationUrl: "https://ieeexplore.ieee.org/document/8915460",
    tags: ["Power Systems", "Fault Classification", "Machine Learning", "Power Transmission"],
    bibtex: `@inproceedings{fahim2019intelligent,
  title={An intelligent approach of fault classification and localization of a power transmission line},
  author={Fahim, Shahriar Rahman and Sarker, Yeahia and Islam, Omar Kamrul and Sarker, Subrata K and Ishraque, Md Fatin and Das, Sajal K},
  booktitle={2019 IEEE International Conference on Power, Electrical, and Electronics and Industrial Applications (PEEIACON)},
  pages={53--56},
  year={2019},
  organization={IEEE}
}`
  },
  {
    title: "A Human-Computer Interaction System Utilizing Inertial Measurement Unit and Convolutional Neural Network",
    authors: [
      "Shahriar Rahman Fahim",
      "Yeahia Sarker",
      "Md Rashiduzzaman",
      "Omar Kamrul Islam",
      "Subrato K Sarker",
      "Sajal K Das"
    ],
    journal: "2019 5th International Conference on Advances in Electrical Engineering (ICAEE)",
    year: 2019,
    abstract: "A novel human-computer interaction system that combines inertial measurement units with convolutional neural networks for improved interaction capabilities.",
    publicationUrl: "https://ieeexplore.ieee.org/document/7393933",
    tags: ["Human-Computer Interaction", "CNN", "Deep Learning", "Inertial Measurement", "Neural Networks"],
    bibtex: `@inproceedings{fahim2019human,
  title={A human-computer interaction system utilizing inertial measurement unit and convolutional neural network},
  author={Fahim, Shahriar Rahman and Sarker, Yeahia and Rashiduzzaman, Md and Islam, Omar Kamrul and Sarker, Subrato K and Das, Sajal K},
  booktitle={2019 5th International Conference on Advances in Electrical Engineering (ICAEE)},
  pages={880--885},
  year={2019},
  organization={IEEE}
}`
  }
];

export default function Publications() {
  // Add modal state
  const [modal, setModal] = useState<ModalState>({ isOpen: false, bibtex: null });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Citation copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy citation:', err);
        alert('Failed to copy citation');
      });
  };

  return (
    <>
      <div className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Publications
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Research publications in machine learning, computer vision, and artificial intelligence
          </p>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {pub.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                      {pub.authors.join(", ")}
                    </p>
                    
                    <p className="text-blue-600 dark:text-blue-400 mb-4 text-sm font-medium">
                      {pub.journal} • {pub.year}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                    
                    {pub.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {pub.pdfUrl && (
                    <a 
                      href={pub.pdfUrl}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaFilePdf /> PDF
                    </a>
                  )}
                  {pub.publicationUrl && (
                    <a 
                      href={pub.publicationUrl}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt /> Publication Page
                    </a>
                  )}
                  <button 
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    onClick={() => setModal({ isOpen: true, bibtex: pub.bibtex || '' })}
                  >
                    <FaQuoteRight /> Cite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative border border-gray-200 dark:border-gray-700">
            {/* Close button */}
            <button
              onClick={() => setModal({ isOpen: false, bibtex: null })}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <FaTimes size={20} />
            </button>
            
            {/* Modal header */}
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <FaQuoteRight className="text-blue-600" />
              BibTeX Citation
            </h3>
            
            {/* Citation content */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl mb-6 border border-gray-200 dark:border-gray-700">
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {modal.bibtex}
              </pre>
            </div>
            
            {/* Copy button */}
            <button
              onClick={() => modal.bibtex && copyToClipboard(modal.bibtex)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
            >
              <FaCopy /> Copy Citation
            </button>
          </div>
        </div>
      )}
    </>
  );
} 