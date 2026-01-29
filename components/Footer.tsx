import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wei-dark-blue py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <Logo className="h-12 mb-6" variant="light" />
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Wei Import. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;