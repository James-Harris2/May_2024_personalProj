import { Typography, Box, Container, Divider } from '@mui/material'; 

function ViewResume() {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Typography variant="h4" gutterBottom>
          James E Harris II
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          jameseharrisii@gmail.com
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          With over 15 years of experience as a Commercial over-the-road trucker, I have a proven track record of success in the transportation industry. 
          As an a company driver, and owner-operator, I have gained valuable experience in managing my own business and maintaining my equipment. 
          My focus on fuel efficiency through techniques like reducing engine RPMs has resulted in a 15% reduction in fuel consumption compared to the industry average.
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Employment History
        </Typography>

        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom>
            Time Management App, Back-end Developer (Mar 2024 - April 2024)
          </Typography>
          <Typography variant="body2">
            Stack: MongoDB, Mongoose, AWS Practitioner, React, JavaScript <br/>
            {/* ... (Rest of the job description) */}
          </Typography>
        </Box>

        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom>
            Owner Operator Vegas Strong Transport (Feb 2021- April 2022)
          </Typography>
        </Box>

        {/* ... (Repeat the above Box for each job) */}
      </Box>

      <Divider variant="middle" />

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <Typography variant="body2" gutterBottom>
          2022-2024 V-school Coding Bootcamp – Web Development Certification Complete <br/>
          2003-2008 University of Phoenix – Graduated Business Administration
        </Typography>
      </Box>
    </Container>
  );
}

export default ViewResume;
