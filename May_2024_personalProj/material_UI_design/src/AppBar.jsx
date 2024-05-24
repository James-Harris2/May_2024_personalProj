import { Button,} from '@mui/material';
import SendIcon from "@mui/icons-material/Send"

// Experimenting with Different layout


function Head() {
  return (
    <div>
            <Button variant="contained" endIcon={<SendIcon />} color="secondary">Enter</Button>
            
       <h5> Build Better User UI Components using Material UI </h5>

      
    </div>
  )
}

export default Head