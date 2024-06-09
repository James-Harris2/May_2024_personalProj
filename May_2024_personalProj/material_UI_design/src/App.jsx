import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { AnimatePresence, motion, } from 'framer-motion';
import Home from "./Components/components/Home";
import About from "./Components/components/About";
import ViewResume from './Resume/ViewResume';
// import ProjectsComponent from './Projects/projectsComponent';
import { Container, } from '@mui/material';
import NavBar from "./Components/components/NavBar"
import Contact from './Components/components/Contact';
import Particles from '../src/Components/components/Particles';
import ToolStack from "./Components/components/ToolStack";
import Footer from "./Components/components/Footer"
import Home2 from './Components/components/Home2';
import ProjectCards from './Components/components/ProjectCards';
// import ContactMe from './Components/components/Contact';
import ContactForm from './Components/components/Contact';

// Page transition animations
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.4 } },
  out: { opacity: 0, transition: { duration: 0.4 } },
};









function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home2 />

      <div>
        <Container>
          <AnimatePresence mode='wait' initial={false}>
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div variants={pageVariants} initial="initial" animate="in" exit="out">
                    <Home />
                    <Particles />


                  </motion.div>
                }
              />


              {/* Other Routes */}
              <Route path="/about" element={
                <motion.div variants={pageVariants} initial="initial" animate="in" exit="out">
                  <About />
                </motion.div>
              } />

              <Route path="/projects" element={
                <motion.div variants={pageVariants} initial="initial" animate="in" exit="out">
                  <ProjectCards />
                </motion.div>
              } />

              <Route path="/resume" element={
                <motion.div variants={pageVariants} initial="initial" animate="in" exit="out">
                  <ViewResume />
                </motion.div>
              } />
                <Route path="/contact me" element={
                <motion.div variants={pageVariants} initial="initial" animate="in" exit="out">
                <Contact />

                </motion.div>
              } />

            </Routes>
          </AnimatePresence>
        </Container>
        <ToolStack />


      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
