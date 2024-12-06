import { Box, Typography } from "@mui/material";
import photo from "../images/mp.png";
function Sidebar() {
  return (
    <>
      <Box>
        <Box
          // height="25vh"
          pb={5}
          pt={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img
            width="80%"
            style={{ borderRadius: "50%", paddingBottom: "20px" }}
            src={photo}
            alt="profile"
          />
          <Typography
            fontSize="2rem"
            fontWeight="bold"
            textAlign="center"
            fontFamily="source-sans-3"
          >
            Mehmet Papila
          </Typography>
        </Box>
        <Box
          borderRadius="30px"
          // sx={{ backgroundColor: "#0F151B" }}
          sx={{ background: "radial-gradient(circle,  #0F151B,#0F1214)" }}
          // border="1px solid #1D2126"
          justifySelf="center"
          p={3}
        >
          <Box
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            mb="20px"
            maxWidth="30vw"
            // border="1px solid #1D2126"
            textAlign="start"
            borderRadius="5px"
            p={1}
            sx={{
              backgroundColor: "#0F151B",
              "&:hover": {
                cursor: "pointer",
              },
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Home
          </Box>
          <Box
            sx={{
              backgroundColor: "#0F151B",
              "&:hover": {
                cursor: "pointer",
              },
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            textAlign="start"
            mb="20px"
            maxWidth="30vw"
            p={1}
            borderRadius="5px"
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </Box>
          <Box
            sx={{
              backgroundColor: "#0F151B",
              "&:hover": {
                cursor: "pointer",
              },
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            onClick={() => {
              const element = document.getElementById("skills");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            textAlign="start"
            mb="20px"
            maxWidth="30vw"
            borderRadius="5px"
            p={1}
          >
            Skills
          </Box>
          <Box
            sx={{
              backgroundColor: "#0F151B",
              "&:hover": {
                cursor: "pointer",
              },
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            onClick={() => {
              const element = document.getElementById("experience");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            textAlign="start"
            mb="20px"
            maxWidth="30vw"
            borderRadius="5px"
            p={1}
          >
            Experiences
          </Box>

          <Box
            sx={{
              backgroundColor: "#0F151B",
              "&:hover": {
                cursor: "pointer",
              },
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            textAlign="start"
            mb="20px"
            maxWidth="30vw"
            p={1}
            borderRadius="5px"
          >
            Projects
          </Box>
          <Box
            sx={{
              backgroundColor: "#0F151B",
              "&:hover": {
                cursor: "pointer",
              },
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            textAlign="start"
            borderRadius="5px"
            maxWidth="30vw"
            p={1}
          >
            Contact
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
