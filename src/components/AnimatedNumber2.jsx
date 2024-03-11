import  { useState, useEffect, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

const AnimatedNumber2 = ({ value, startAnimation2 }) => {
  const [currentValue, setCurrentValue] = useState(0);

  const incrementAmount = useMemo(() => Math.ceil(value / 100), [value]);

  useEffect(() => {
    if (!startAnimation2) return;

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
  }, [currentValue, incrementAmount, startAnimation2, value]);

  return <span>{currentValue}</span>;
};

AnimatedNumber2.propTypes = {
  value: PropTypes.number.isRequired,
  startAnimation2: PropTypes.bool.isRequired,
};

export default memo(AnimatedNumber2);
