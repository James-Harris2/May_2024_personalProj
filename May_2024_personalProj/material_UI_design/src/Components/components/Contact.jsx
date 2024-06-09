import  { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Alert, Snackbar } from '@mui/material';

function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const onSubmit = (data) => {
        console.log(data); // Replace with your actual submission logic

        // After successful submission:
        reset(); // Reset the form
        setFormData({ name: "", email: "", message: "" });
        setOpenSnackbar(true); // Show the success message
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ 
            border: '1px solid #ccc', // Add a border
            borderRadius: '4px',
            padding: '20px',
            maxWidth: 600,  // Limit max width
            margin: 'auto', // Center horizontally
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Name"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                />

                <TextField
                    label="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                />

                <TextField
                    label="Message"
                    {...register("message", { required: "Message is required" })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={formData.message}
                    onChange={handleChange}
                />

                <Button type="submit" variant="contained" color="primary">
                    Send Message
                </Button>
            </form>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Thank you for your message!"
            />
        </Box>
    );
}

export default ContactForm;
