import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl shadow-2xl shadow-black/10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-2 shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-all duration-300">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-200 to-secondary-200 text-transparent bg-clip-text">
                  ResumeForge
                </h1>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
                <Link 
                  to="/" 
                  className={`px-4 py-2 text-white/90 hover:text-white transition-colors rounded-xl hover:bg-white/10 ${
                    location.pathname === '/' ? 'bg-white/10 text-white' : ''
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/templates" 
                  className={`px-4 py-2 text-white/90 hover:text-white transition-colors rounded-xl hover:bg-white/10 ${
                    location.pathname === '/templates' ? 'bg-white/10 text-white' : ''
                  }`}
                >
                  Templates
                </Link>
                <a 
                  href="#features" 
                  className="px-4 py-2 text-white/90 hover:text-white transition-colors rounded-xl hover:bg-white/10"
                >
                  Features
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}