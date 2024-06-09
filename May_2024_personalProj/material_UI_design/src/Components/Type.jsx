import Particles from 'react-particles';
import Typewriter from 'typewriter-effect';
import particlesConfig from './ParticlesConfig';
import { motion } from 'framer-motion';

function Type() {
  const textVariants = { // Use a single variant for both container and items
    hidden: { opacity: 0, y: -50 }, // Initial state for both
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } // Final state for both
  };

  return (
    <motion.div className="App" variants={textVariants} initial="hidden" animate="visible">
      <div style={{ position: 'relative' }}>
        <Particles params={particlesConfig} style={{ position: 'absolute' }} />
        <motion.div style={{ position: 'relative', zIndex: 1 }} variants={textVariants}> 
          {/* Apply variants to the inner div */}
          <Typewriter
            options={{
              strings: [
                "I'm James E. Harris, II",
                "Software Developer",
                "Former OTR Driver ",
                "I build custom websites & mobile application",
                "Open Source Contributor"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Type;
