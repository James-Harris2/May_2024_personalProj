import {
  Box, 
  Typography,
  Chip,
  Grid,
} from "@mui/material";
import ImgMediaCard from './ImgMediaCard'; // Make sure to import your custom card component


function About() {
  return (
      <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 2 }}> {/* Added padding for visual spacing */}
          <ImgMediaCard 
              imageSrc="../../assets/Assets/asset2_me.jpg" // Add your image path
              title="About Me"
              websiteLink="" // Add your website link
          /> 

          <Typography variant="body1" paragraph align="center" mt={2}> 
              I am a passionate web developer with expertise in React, JavaScript, 
              MongoDB, GitHub, Express.js and other technologies. I enjoy building creative 
              and user-friendly applications.
          </Typography>

          <Typography variant="h6" gutterBottom align="center" mt={3}>
              Skills
          </Typography>

          <Grid container justifyContent="center" spacing={1}>
              <Grid item>
                  <Chip label="React" />
              </Grid>
              <Grid item>
                  <Chip label="MongoDB" />
              </Grid>
              {/* Add more Chip components for other skills */}
              <Grid item>
                  <Chip label="Mongoose" />
              </Grid>
              <Grid item>
                  <Chip label="Node" />
              </Grid>
              <Grid item>
                  <Chip label="Express" />
              </Grid>
              <Grid item>
                  <Chip label="AWS" />
              </Grid>
              <Grid item>
                  <Chip label="JavaScript" />
              </Grid>

          </Grid>
      </Box>
  );
}

export default About;
