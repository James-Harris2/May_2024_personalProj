import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from "./Home/homeComponent" // Your component files
import Projects from "./Projects/projectsComponent";
import Resume from "./Resume/resumeComponent";
import Head from './Head'
import Main from './ToolBar'
// ... other components

function App() {
  return (
    <BrowserRouter> 


      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Head" element={<Head />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App




















