'use client'

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState } from 'react';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
  >
    {children}
  </Link>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg z-50 border-b border-gray-200/20 dark:border-gray-700/20">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-lg">
              YS
            </Link>
          </div>

          {/* Desktop Navigation - now right aligned */}
          <div className="hidden md:flex items-center justify-end space-x-1 flex-grow">
            <div className="flex items-center space-x-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/publications">Publications</NavLink>
              <NavLink href="/experience">Experience</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <div className="ml-4 p-1 rounded-lg bg-gray-100/50 dark:bg-gray-800/50">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[72px] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex flex-col p-4 space-y-2">
              <NavLink href="/" onClick={closeMenu}>Home</NavLink>
              <NavLink href="/projects" onClick={closeMenu}>Projects</NavLink>
              <NavLink href="/publications" onClick={closeMenu}>Publications</NavLink>
              <NavLink href="/experience" onClick={closeMenu}>Experience</NavLink>
              <NavLink href="/contact" onClick={closeMenu}>Contact</NavLink>
              <div className="p-1 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 inline-flex">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 