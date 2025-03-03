'use client'

import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiGooglescholar, SiResearchgate } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello
        </p>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="space-y-6">
            <a 
              href="mailto:yeahia (dot) ruet at gmail (dot)com" 
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <FaEnvelope className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm">yeahia (dot) ruet at gmail (dot)com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/yeahiasarker" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <FaLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm">Connect professionally</p>
              </div>
            </a>

            <a 
              href="https://github.com/yeahiasarker" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <FaGithub className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm">Check out my projects</p>
              </div>
            </a>

            <a 
              href="https://scholar.google.com/citations?user=bs7_ARcAAAAJ&hl=en" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <SiGooglescholar className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">Google Scholar</h3>
                <p className="text-sm">View my publications</p>
              </div>
            </a>

            <a 
              href="https://www.researchgate.net/profile/yeahiasarker" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <SiResearchgate className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">ResearchGate</h3>
                <p className="text-sm">Follow my research</p>
              </div>
            </a>

            <a 
              href="https://twitter.com/yeahiasarker1" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <FaTwitter className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm">Follow for updates</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
