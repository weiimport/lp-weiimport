import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  onClick,
  className = "",
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-wei-dark-blue text-white hover:bg-wei-medium-blue border-2 border-transparent",
    secondary: "bg-wei-light-gold text-wei-dark-blue hover:bg-white hover:text-wei-dark-blue hover:border-wei-dark-blue border-2 border-transparent",
    white: "bg-white text-wei-dark-blue hover:bg-wei-light-gray hover:scale-105"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;