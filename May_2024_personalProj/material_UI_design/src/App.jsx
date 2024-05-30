import {  BrowserRouter } from 'react-router-dom';
// import Tabs from "./Components/components/Tabs"
// import Home from "./Components/components/Home";
// import Home2 from './Components/components/Home2';
// import About from "./Components/components/About";
// import Projects from "./Projects/projectsComponent";
// import projectsComponent from "../src/Projects/projectsComponent"
// import Resume from "./Resume/resumeComponent";
import NavBar from './Components/components/NavBar'
// import IconLogo from "./Components/components/IconLogo"
import ToolStack from "./Components/components/ToolStack"
import Techstack from "./Components/components/Techstack"
import Footer from './Components/components/Footer';
import { Button } from '@mui/material';
// import ScrollToTop from './Components/components/ScrollToTheTop';
// import ProjectCard from './Components/components/ProjectCards';
// import ProjectComponent from './Components/components/ProjectCards';


// ... other imports ...

function App() {
  return (
    <BrowserRouter>
    <Button />
      {/* <IconLogo/> */}
      {/* ... other components like NavBar, ToolStack ... */}
      {/* <ProjectCard  /> */}
      {/* <ScrollToTop  /> */}
      {/* <Routes>
        <Route path="/" element={
          <Tabs> */}
            {/* <Home  /> */}
            {/* <Home2 /> */}
          {/* </Tabs>
        } />
        <Route path="/About" element={
          <Tabs>
            <About />
          </Tabs>
        } />
        <Route path="/Projects" element={
          <Tabs>
            {/* <Projects /> */}
          {/* </Tabs> */} 
        {/* <Route path="/Resume" element={
          <Tabs>
            <Resume />
          </Tabs>
        } />
      </Routes> */}
        <NavBar/>,
        <ToolStack/>,
         <Techstack  />,
          <Footer  />

    </BrowserRouter>
  );
}
export default App;