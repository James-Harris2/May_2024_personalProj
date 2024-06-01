// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Stack,
// } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import { SiLandrover } from "react-icons/si";
// // import ProjectComponent from "../components/ProjectComponent"





// const buttonData = [
//   { label: "GitHub", icon: <GitHubIcon />, linkProp: "ghLink" },
//   { label: "Project", icon: <SiLandrover />, linkProp: "link", condition: true },
// ];

// // function projectsData1 ({ project }) {
// //   const handleButtonClick = (link) => {
// //     window.open(link, "project");
// //   };

//   return (
//     <Card sx={{ maxWidth: 345, margin: 2 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={project.imgPath || "https://fe-render-test.onrender.com/"}
//         alt={project.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {project.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {project.description}
//         </Typography>
//         <Stack direction="row" spacing={2} mt={2}>
//           {buttonData.map((button) => (
//             <Button
//               key={button.label}
//               variant="outlined"
//               startIcon={button.icon}
//               onClick={() => handleButtonClick(project[button.linkProp])}
//               disabled={!project[button.linkProp]} // Disable if link doesn't exist
//             >
//               {button.label}
//             </Button>
//           ))}
//         </Stack>
//       </CardContent>
//     </Card>
//   );
  

// export default  ProjectComponent

// // ... (Your ParentComponent remains the same)
