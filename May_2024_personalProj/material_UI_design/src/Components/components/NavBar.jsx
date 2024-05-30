import  { useState } from 'react';
import { AppBar, Toolbar, IconButton, Tabs, Tab, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaEnvelope, FaUser, FaFileAlt } from 'react-icons/fa';
// import IconLogo from './IconLogo'; 

function NavBar() {
  const [value, setValue] = useState(""); // Default to the Home tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabData = [ // Array to store tab data
    { label: "Home", icon: <FaHome />, to: "/" },
    { label: "Projects", icon: <FaProjectDiagram />, to: "/projects" },
    { label: "Contact Me", icon: <FaEnvelope />, to: "/contact" },
    { label: "About Me", icon: <FaUser />, to: "/about" },
    { label: "Resume", icon: <FaFileAlt />, to: "/resume" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconLogo />  */}
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu" 
          sx={{ ml: 2, display: { xs: 'block', sm: 'none' } }} 
          onClick={() => setValue(null)}
        >
          <MenuIcon />
        </IconButton>

        <Tabs 
          value={value} 
          onChange={handleChange} 
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} 
        >
          {tabData.map((tab) => (
            <Tab 
              key={tab.to} // Use 'to' (path) as the unique key
              icon={tab.icon} 
              label={tab.label} 
              component={RouterLink} 
              to={tab.to} 
              value={tab.to} 
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
