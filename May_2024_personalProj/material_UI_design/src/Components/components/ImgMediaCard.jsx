import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Typography 
} from '@mui/material';

function MediaCard() {



  return (
    <Card sx={{ maxWidth: 345 }}> {/* Adjust maxWidth as needed */}
      <CardMedia
        component="img"
        height="140" // Adjust height as needed
        img src={'./assets/Assets/asset2_me.jpg'}
        alt={'james'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {''}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
