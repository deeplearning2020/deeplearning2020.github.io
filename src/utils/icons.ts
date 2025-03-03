import dynamic from 'next/dynamic';

// Dynamically import icons
export const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub));
export const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin));
// ... import other icons similarly 