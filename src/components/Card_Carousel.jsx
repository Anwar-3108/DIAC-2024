import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import '../styles/Card_Carousel.css'; // Import CSS file for component styles

function Component() {
  const carouselData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    // Add more cards as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <div className="carousel-container">
      {carouselData.map((card, index) => (
        <div
          key={index}
          className={index === currentCardIndex ? 'carousel-item active' : 'carousel-item'}
        >
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Component;