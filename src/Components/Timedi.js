import React, { useEffect, useState } from 'react';
import './Timedi.css';

const imageList = [
  '/Images/img1.jpg',
  '/Images/img2.jpg',
  '/Images/img3.jpg',
  '/Images/img4.jpg',
  '/Images/img5.jpg',
  '/Images/img6.jpg',
  '/Images/img7.jpg',
  '/Images/img8.jpg',
  '/Images/img9.jpg',
  '/Images/img10.jpg',
  '/Images/img11.jpg'
];

const Timedi = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    let timers = [];

    imageList.forEach((img, index) => {
      const timer = setTimeout(() => {
        setVisibleImages(prev => {
          // Prevent duplicates
          if (!prev.includes(img)) {
            return [...prev, img];
          }
          return prev;
        });
      }, 1000 * (index + 1));
      timers.push(timer);
    });

    // Cleanup timers on unmount
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="timed-images">
      {visibleImages.map((src, idx) => (
        <img key={idx} src={src} alt={`Support ${idx + 1}`} className="fade-in" />
      ))}
    </div>
  );
};

export default Timedi;