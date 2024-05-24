import {AppBar, Toolbar, Typography, Button} from "@mui/material";





function Main() {
  return (
    <div>
    <AppBar variant="outlined">

            <Toolbar>
                <Typography>JEH II</Typography>
                <Button sx={{marginLeft:"auto"}} variant="contained" color="warning">Login</Button>

            </Toolbar>

    </AppBar>
        
    </div>
  )
}

export default Main