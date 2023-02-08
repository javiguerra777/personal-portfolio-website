import React from 'react';
import { nanoid } from 'nanoid';
import { Carousel as BootCarousel } from 'react-bootstrap';
import languages from '../arrays/languages';

function Carousel() {
  return (
    <div className="glass-bg d-flex flex-column align-items-center">
      <span className="mb-3 carousel-title">Known Languages</span>
      <BootCarousel className="w-50">
        {languages.map((language) => (
          <BootCarousel.Item
            key={nanoid()}
            interval={2000}
            className="bg-transparent carousel-item"
          >
            <img
              className="d-block carousel-img rounded"
              src={language.img}
              alt={language.language}
            />
            <BootCarousel.Caption className="bg-dark">
              <p>Language: {language.language}</p>
              <div>
                <span>Experience:</span>
                <strong>{language.stars}</strong>
              </div>
            </BootCarousel.Caption>
          </BootCarousel.Item>
        ))}
      </BootCarousel>
    </div>
  );
}

export default Carousel;
