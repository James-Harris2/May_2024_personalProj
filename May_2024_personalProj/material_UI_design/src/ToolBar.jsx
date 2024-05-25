import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';










function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JEHii
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
          <Button color="inherit" component={Link} to="/Head">Head</Button>
          {/* Add more buttons for other routes */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
