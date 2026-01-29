import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  '/images/gallery-slide-01.jpg',
  '/images/gallery-slide-02.jpg',
  '/images/gallery-slide-03.jpg',
  '/images/gallery-slide-04.jpg',
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <section className="w-full bg-wei-light-gray py-12 md:py-16 relative overflow-hidden">
      {/* Background Image with Transparency Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery-slide-02.jpg"
          alt="Wei Import Team Background"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        {/* Overlay to blend with background */}
        <div className="absolute inset-0 bg-wei-light-gray/60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">

        {/* Main Slider Container - Boxed Style */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-white group">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={IMAGES[currentIndex]}
              alt={`Wei Import Gallery Slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay Gradient for Text readability if needed, currently subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-wei-light-gold w-8' : 'bg-white/70 hover:bg-white'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;