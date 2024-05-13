import  { useEffect, useRef } from 'react';
import Vivus from 'vivus';

const MainTitle = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) { // Check if the ref is set
      new Vivus(svgRef.current, { 
        duration: 200, 
        file: 'svg/main-title_animated.svg'
      });
    }
  }, [svgRef]); // Include the ref as a dependency

  return (
    <div id={svgRef}> 
    </div>
  );
};

export default MainTitle;
