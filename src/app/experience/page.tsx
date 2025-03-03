'use client'

import { FaBriefcase, FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
};

type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
};

const workExperience: Experience[] = [
  {
    title: "Machine Learning Expert",
    company: "R Ventures PLC",
    period: "December 2024 - Present",
    description: [
      "Currently working on recommendation engine for an OTT platform using cutting-edge machine learning algorithms"
    ],
    technologies: ['Machine Learning', 'Recommendation Systems']
  },
  {
    title: "Head of Artificial Intelligence",
    company: "MyAlice.ai",
    period: "February 2024 - November 2024",
    description: [
      "Leading the AI team tasked with operationalizing cutting-edge machine learning research",
      "Implementing robust visual and language models tailored for enhancing product photography and optimizing customer support processes"
    ],
    technologies: ['Computer Vision', 'NLP', 'Machine Learning']
  },
  {
    title: "Senior Vice President of Machine Learning Research",
    company: "Anchorblock Technology LLC",
    period: "April 2022 - March 2024",
    description: [
      "Conducted extensive research and analysis to identify gaps in fault detection approaches",
      "Created novel neural network architecture outperforming traditional techniques",
      "Collaborated with team members to resolve technical challenges in deep learning implementations"
    ],
    technologies: ['Deep Learning', 'Neural Networks', 'Fault Detection']
  },
  {
    title: "Research Assistant",
    company: "Universiti Brunei Darussalam",
    period: "June 2021 - March 2022",
    description: [
      "Authored 3 journal papers on research findings with average citation count of 30 per paper",
      "Conducted research under supervision of Dr. Atika Qazi"
    ],
    technologies: ['Academic Research', 'Technical Writing']
  },
  {
    title: "Research Intern",
    company: "Harvard Medical School",
    period: "March 2021 - June 2021",
    description: [
      "Initiated and developed a tele-medicine project for eye-region detection using pre-trained weights",
      "Implemented desktop app demonstrating eye-misalignment project potential"
    ],
    technologies: ['Computer Vision', 'Medical AI', 'Desktop Development']
  },
  {
    title: "Research Intern",
    company: "Stanford University",
    period: "December 2020 - February 2021",
    description: [
      "Designed and implemented novel classification neural network architecture for breast cancer histopathological images",
      "Achieved state-of-the-art performance in multiple performance metrics"
    ],
    technologies: ['Deep Learning', 'Medical Imaging', 'Classification Models']
  },
  {
    title: "Senior Machine Learning Engineer",
    company: "Bugfixers",
    period: "November 2019 - October 2020",
    description: [
      "Spearheaded deployment of large scale facial recognition system",
      "Led machine learning team from ideation to production",
      "Mentored and managed team of engineers, providing technical guidance"
    ],
    technologies: ['Facial Recognition', 'MLOps', 'Team Leadership']
  },
  {
    title: "Research Assistant",
    company: "Control System Research Group",
    period: "January 2019 - November 2019",
    description: [
      "Conducted research in fault detection approaches under Dr. Sajal K Das",
      "Created novel neural network architecture outperforming traditional techniques",
      "Collaborated on deep learning implementation challenges"
    ],
    technologies: ['Neural Networks', 'Fault Detection', 'Research']
  },
  {
    title: "Deep Learning Intern",
    company: "Gaze.ai",
    period: "May 2019 - June 2019",
    description: [
      "Gained hands-on experience in face recognition models and loss functions",
      "Converted PyTorch models to TensorFlow using ONNX"
    ],
    technologies: ['PyTorch', 'TensorFlow', 'ONNX', 'Face Recognition']
  }
];

const education: Education[] = [
  {
    degree: "Bsc. in Mechatronics Engineering",
    institution: "Rajshahi University of Engineering & Technology",
    period: "2016",
    description: "Thesis : Graph Co-ordinate Attenton Network for Hyperspectral Image Classification",
    achievements: [
      "Participated in European Mars Rover Competition",
      "Participated in IIT Bombay Techfest",
    ]
  }
];

export default function Experience() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Professional journey in machine learning and software development
        </p>
        
        <div className="space-y-16">
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
              <FaBriefcase className="text-blue-600" /> Work Experience
            </h2>
            
            <div className="space-y-12">
              {workExperience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
              <FaGraduationCap className="text-blue-600" /> Education
            </h2>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">{edu.description}</p>
                    {edu.achievements && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
