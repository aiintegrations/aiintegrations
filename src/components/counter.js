import React, { useState, useEffect } from 'react';

const Counter = ({ target, followChar, followText }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 100;

    const updateCounter = () => {
      if (start < target) {
        setCount(Math.ceil(start));
        start += increment;
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    const handleScroll = () => {
      const element = document.getElementById('counter');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !count) {
          updateCounter();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [count, target]);

  return (
    <div className="counter" id="counter">
      <div className='counter__text'>Over</div>
      {count}{followChar}
      <div className='counter__text'>{followText}</div>
    </div>
  );
};

export default Counter;
