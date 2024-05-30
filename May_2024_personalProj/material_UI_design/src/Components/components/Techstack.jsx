import { Box, Grid, Typography } from "@mui/material";  // Import MUI components
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiAws,

} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const techIcons = [ // Array of tech icons for easier iteration
    { icon: <DiJavascript1 />, label: 'JavaScript' },
    { icon: <DiNodejs />, label: 'Node.js' },
    { icon: <DiReact />, label: 'React' },
    { icon: <DiAws />, label: 'AWS' },

    { icon: <DiMongodb />, label: 'MongoDB' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <DiGit />, label: 'Git' },
    { icon: <SiFirebase />, label: 'Firebase' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <DiPython />, label: 'Python' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}> 
      <Grid container spacing={2}>  
        {techIcons.map(({ icon, label }, index) => (
          <Grid item xs={4} md={2} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {icon}
            <Typography variant="body2">{label}</Typography> 
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Techstack;
