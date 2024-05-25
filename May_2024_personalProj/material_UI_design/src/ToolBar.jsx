import {AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { divs, inValue, hTag, span,} from "./js1.js"










function Main() {
  // Removed useEffect as it is not needed

  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <Typography>JEH II</Typography>
          <Button sx={{ marginLeft: "auto" }} variant="contained" color="warning">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Main;

