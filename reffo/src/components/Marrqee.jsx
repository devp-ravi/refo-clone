import React from 'react';
import { motion } from 'framer-motion';

/**
 * A seamless, looping marquee component.
 * @param {string[]} images - An array of image URLs to display.
 * @param {'left' | 'right'} [direction='left'] - The direction of the scroll.
 * @param {number} [speed=40] - The duration of one full scroll cycle in seconds. A higher number means a slower speed.
 */
function Marquee({ images, direction = 'left', speed = 15 }) {
  // We need to render the images twice to create the seamless loop effect
  const marqueeImages = [...images, ...images];

  return (
    // 1. The outer div acts as a "viewport" that hides the overflowing content.
    <div className='w-full overflow-hidden'>
      <motion.div
        // 2. This is the container that moves. It contains two sets of images.
        className='flex flex-shrink-0 gap-10 py-4' // Using a standard Tailwind gap
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* 3. Map over the doubled array of images */}
        {marqueeImages.map((img, index) => (
          <img
            src={img}
            alt={`Marquee item ${index}`}
            key={index} // Using index is acceptable here as the list is static
            className='h-[4vw]  w-auto flex-shrink-0' // Adjusted for better visibility and to prevent squishing
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;