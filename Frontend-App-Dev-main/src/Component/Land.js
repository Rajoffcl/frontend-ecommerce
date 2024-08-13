import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Images/prime pickbg.png";

const Land = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      
      img: "https://cdn-stamplib.casetify.com/cms/image/f3d08b5db16d63b55edaa7720b5ca156.png.webp",
      
    },
    {
      
      img: "https://cdn-stamplib.casetify.com/cms/image/f7aac01ef773f3974f9f4a2127284f6b.jpg",
      
    },
    {
      
      img: "https://coveritup.com/cdn/shop/files/image_-_2023-06-08T123357.688.png?v=1686207850&width=2000",
      
    },
    {
      
      img: "https://cdn-stamplib.casetify.com/cms/image/e1460ae054f707c20e349e67b8426499.jpg.webp",
      
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevSlide = () => {
    navigate("/search");
  };

  const next = () => {
    navigate("/search");
  };

  return (
    <>
      <main>
        <div className="slider">
          <div className="slider-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img className="slide-img" src={slide.img} alt={slide.title} />
                <h1 className="slide-title">{slide.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-bar">
          <div className="slider-controls">
            <button className="slider-next-btn" onClick={next}>Explore</button>
          </div>
          <div className="slide-indicator-container">
            <ul className="slide-indicator">
              {slides.map((_, index) => (
                <li key={index} className={index === currentSlide ? 'active' : ''}>
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Land;
