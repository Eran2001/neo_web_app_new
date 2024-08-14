import React from 'react';

// Sample data for images
const images = [
  { src: '/assets/work/thumb1.png', alt: 'Square Image 1', size: 'square' },
  { src: '/assets/work/thumb1.png', alt: 'Square Image 1', size: 'square' },
  { src: '/assets/work/thumb2.png', alt: 'Rectangle Image 1', size: 'rectangle' },
  { src: '/assets/work/thumb3.png', alt: 'Square Image 2', size: 'square' },
  { src: '/assets/work/thumb2.png', alt: 'Rectangle Image 2', size: 'rectangle' },
  // Add more images as needed
];

const Work = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group ${image.size === 'rectangle' ? 'col-span-2' : 'col-span-1'}`}
          >
            <div className={`relative ${image.size === 'rectangle' ? 'aspect-w-2 aspect-h-1' : 'aspect-w-1 aspect-h-1'}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
