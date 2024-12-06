import {
  Box,
  Button,
  FormControl,
  Input,
  Snackbar,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [open, setOpen] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setOpen(true);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Email sending failed:", error.text);
      }
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          // textAlign: "-webkit-center",
          background: "#0f1214",
          backgroundImage: "radial-gradient(circle, #1c1818,#0f1214)",
          borderRadius: "8px",
          padding: "20px",
          // maxWidth: "400px",
          margin: "auto",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          // textAlign="center"
          alignSelf="start"
          fontSize="80px"
          sx={{ marginBottom: "20px" }}
          fontFamily="source-sans-3"
        >
          Contact
        </Typography>
        <form onSubmit={sendEmail}>
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <Input
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              disableUnderline
              sx={{
                backgroundColor: "#9d9d9d",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <Input
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              disableUnderline
              sx={{
                backgroundColor: "#9d9d9d",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <Input
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              multiline
              rows={4}
              disableUnderline
              sx={{
                backgroundColor: "#9d9d9d",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              fontFamily: "sans-serif",
              textTransform: "none",
              alignSelf: "center",
              width: "fit-content",
              "&:hover": {
                backgroundColor: "#0c0c0c",
              },
              "--variant-containedBg": "#2E77C5",
            }}
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Message sent successfully!"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Box>
    </>
  );
}

export default Contact;
