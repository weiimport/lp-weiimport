import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'light' }) => {
  const logoSrc = variant === 'light' ? '/images/logo-white.png' : '/images/logo-blue.png';

  return (
    <img
      src={logoSrc}
      alt="Wei Import Logo"
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;