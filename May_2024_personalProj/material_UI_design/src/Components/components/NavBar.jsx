import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaEnvelope, FaUser, FaFileAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [activeTab, setActiveTab] = useState("/");
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabData = [
    { label: "Home", icon: FaHome, to: "/", hoverColor: "rgba(255, 255, 255, 0.8)" },
    { label: "Projects", icon: FaProjectDiagram, to: "/projects", hoverColor: "rgba(255, 255, 255, 0.8)" },
    { label: "Contact Me", icon: FaEnvelope, to: "/contact me", hoverColor: "rgba(255, 255, 255, 0.8)" },
    { label: "About Me", icon: FaUser, to: "/about", hoverColor: "rgba(255, 255, 255, 0.8)" },
    { label: "Resume", icon: FaFileAlt, to: "/resume", hoverColor: "rgba(255, 255, 255, 0.8)" },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}> 
      <Toolbar>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          {tabData.map((tab) => (
            <motion.div 
              key={tab.to} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setActiveTab(tab.to)} 
              onHoverEnd={() => setActiveTab(pathname)}
            >
              <Tab
                icon={tab.icon}
                label={tab.label}
                component={RouterLink}
                to={tab.to}
                value={tab.to}
                sx={{
                  color: activeTab === tab.to ? "primary.contrastText" : "inherit",
                  bgcolor: activeTab === tab.to ? "primary.dark" : "transparent",
                }}
              />
            </motion.div>
          ))}
        </Tabs>
        <IconButton/>
      </Toolbar>
      <AnimatePresence>
        
         
      </AnimatePresence>
    </AppBar>
  );
}

export default NavBar;
