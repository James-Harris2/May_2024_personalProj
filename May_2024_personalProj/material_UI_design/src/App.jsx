import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home/homeComponent" // Your component files
import Projects from "./Projects/projectsComponent";
import Resume from "./Resume/resumeComponent";
import Head from './AppBar'
import Main from './ToolBar'
// ... other components

function App() {
  return (
    <BrowserRouter> 
      <nav> {/* Your navbar goes here */}
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/Head">Head</Link>
        <Link to="/Main">Main</Link>
        <Link to="/resume">Resume</Link>

        {/* ... other links */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Head" element={<Head />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App




















