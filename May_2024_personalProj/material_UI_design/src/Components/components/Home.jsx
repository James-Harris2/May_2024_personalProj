import { } from 'react-router-dom';
import {  Container, Grid, Typography,} from '@mui/material';
import { motion } from 'framer-motion';
import TechStack from '../components/Techstack'
import Type from '../Type'


function Home() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to My Portfolio
          <Type />
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
           Specializing in [MERN Stack].
        </Typography>
      </motion.div>

      {/* Tech Stack Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }} 
      >
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 3 }}>
          <TechStack /> 
        </Grid>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }} 
      >
        
      </motion.div>
    </Container>
  );
}

export default Home;
