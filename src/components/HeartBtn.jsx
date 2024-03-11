import  { useState } from 'react';
import '../styles/HeartBtn.css'; // Make sure to import your CSS file

const HeartBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  return (
    <div className='heart-btn'>
      <i className={`icon-heart ${isClicked ? 'icon-heart--clicked' : ''}`} onClick={handleClick}></i>
    </div>
  );
};

export default HeartBtn;
