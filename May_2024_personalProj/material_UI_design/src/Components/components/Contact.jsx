import { 
    TextField, 
    Box, 
    Typography, 
    Button, 
    InputAdornment 
} from '@mui/material';

function Contact() {
  const inputFields = [
    { label: "Name (First, Last)", required: true },
    { label: "Client ID", required: true },
    { 
      label: "Website", 
      placeholder: "https://example.com",
      InputProps: {
        startAdornment: <InputAdornment position="start">https://</InputAdornment>,
      },
      // TODO: Add validation for valid HTTPS URL
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>

      {inputFields.map((field, index) => (
        <TextField
          key={index}
          label={field.label}
          fullWidth
          margin="normal"
          variant="outlined"
          required={field.required}
          placeholder={field.placeholder}
          InputProps={field.InputProps}
        />
      ))}

      <TextField
        label="Message"
        fullWidth
        multiline
        rows={6}
        margin="normal"
        variant="outlined"
        inputProps={{ maxLength: 350 }}
        helperText={`${350 - event.target.value.length} characters remaining`}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default Contact;
