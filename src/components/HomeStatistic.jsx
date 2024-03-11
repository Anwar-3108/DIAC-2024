import  { useState, useEffect, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
 
const HomeStatistic = ({ value, startAnimation }) => {
    const [currentValue, setCurrentValue] = useState(0);

    const incrementAmount = useMemo(() => Math.ceil(value / 100), [value]);
  
    useEffect(() => {
        if (!startAnimation) return;
    
        if (currentValue === value) return;
    
        const interval = setInterval(() => {
          setCurrentValue((prev) => {  
            const newValue = prev + incrementAmount;
            if (newValue >= value) {
              clearInterval(interval);
              return value;
            }
            return newValue;
          });
        }, 20);
    
        return () => clearInterval(interval);
      }, [currentValue, incrementAmount, startAnimation, value]);
    
      return <span>{currentValue}</span>;
}

HomeStatistic.propTypes = {
    value: PropTypes.number.isRequired,
    startAnimation: PropTypes.bool.isRequired,
  };

export default memo(HomeStatistic)
