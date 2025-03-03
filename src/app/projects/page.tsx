'use client'

import { FaGithub, FaExternalLinkAlt, FaServer, FaBrain, FaChartBar } from 'react-icons/fa';
import { SiPytorch, SiOpenai, SiHuggingface, SiFastapi, SiMongodb, SiDocker, SiKubernetes } from 'react-icons/si';

type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  icons: React.ElementType[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  category: 'AI' | 'MLOps' | 'Full Stack';
};

const projects: Project[] = [
  {
    title: "LLM-Powered Document Analysis System",
    description: "Enterprise-scale document processing system using LLMs",
    longDescription: "Built a scalable system that processes, analyzes, and extracts insights from large document collections using LLMs. Implemented RAG, fine-tuning, and custom evaluation metrics.",
    technologies: ['LangChain', 'OpenAI', 'FastAPI', 'MongoDB', 'Docker', 'Kubernetes'],
    icons: [SiOpenai, SiFastapi, SiMongodb, SiDocker, SiKubernetes],
    githubUrl: "https://github.com/yourusername/llm-doc-analysis",
    category: 'AI'
  },
  {
    title: "Neural Search Engine",
    description: "Semantic search engine using transformer models",
    longDescription: "Developed a high-performance semantic search engine using transformer models and vector databases. Includes real-time indexing and custom ranking algorithms.",
    technologies: ['PyTorch', 'Transformers', 'FastAPI', 'Elasticsearch', 'Redis'],
    icons: [SiPytorch, SiHuggingface, SiFastapi],
    githubUrl: "https://github.com/yourusername/neural-search",
    demoUrl: "https://demo.yourdomain.com",
    category: 'AI'
  },
  {
    title: "MLOps Pipeline Framework",
    description: "Production-grade ML model deployment pipeline",
    longDescription: "Created a comprehensive MLOps framework for automating ML model training, evaluation, and deployment. Includes monitoring, A/B testing, and automatic retraining.",
    technologies: ['Python', 'Docker', 'Kubernetes', 'MLflow', 'Airflow', 'Prometheus'],
    icons: [SiDocker, SiKubernetes, FaServer],
    githubUrl: "https://github.com/yourusername/mlops-framework",
    category: 'MLOps'
  },
  {
    title: "Computer Vision Pipeline",
    description: "Real-time object detection and tracking system",
    longDescription: "Implemented a real-time computer vision system for object detection, tracking, and analysis using deep learning models. Optimized for edge devices.",
    technologies: ['PyTorch', 'OpenCV', 'TensorRT', 'CUDA', 'C++'],
    icons: [SiPytorch, FaBrain],
    githubUrl: "https://github.com/yourusername/cv-pipeline",
    category: 'AI'
  },
  {
    title: "AI Model Evaluation Framework",
    description: "Comprehensive testing suite for ML models",
    longDescription: "Built a framework for rigorous testing and evaluation of ML models, including performance metrics, bias detection, and automated reporting.",
    technologies: ['Python', 'PyTest', 'MLflow', 'Weights & Biases', 'Pandas'],
    icons: [FaChartBar, FaBrain],
    githubUrl: "https://github.com/yourusername/ml-testing",
    category: 'MLOps'
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A collection of my work in machine learning, MLOps, and software development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.longDescription}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mb-4">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon 
                        key={iconIndex} 
                        className="text-2xl text-gray-600 dark:text-gray-400"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 