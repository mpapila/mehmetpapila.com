import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sidebar from "./component/Sidebar";
import "./App.css";
import Projects from "./component/Projects";
import { TypeAnimation } from "react-type-animation";
import Contact from "./component/Contact";
import Experiences from "./component/Experiences";
import About from "./component/About";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Skills from "./component/Skills";
import ArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import photo from "./images/mp.png";
import Footer from "./component/Footer";

function App() {
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down(801));
  return (
    <Box display="flex">
      {!isPhoneScreen && (
        <Box
          height="100vh"
          pr={7}
          sx={{
            width: !isPhoneScreen ? "20%" : "0",
          }}
        >
          <Sidebar />
        </Box>
      )}
      <Box
        overflow="scroll"
        height="100vh"
        sx={{
          width: !isPhoneScreen ? "70%" : "100%",
          // p: "5px 5px 0 5px",
          scrollbarWidth: "none",
        }}
      >
        <Box>
          <Box
            id="home"
            textAlign="center"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box>
              {isPhoneScreen && (
                <Box
                  // height="25vh"
                  // pb={5}
                  pt={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img
                    width="60%"
                    style={{
                      borderRadius: "50%",
                      // paddingBottom: "20px"
                    }}
                    src={photo}
                    alt="profile"
                  />
                </Box>
              )}
            </Box>
            <Box>
              <Typography variant="h4"> Hello, I am </Typography>
              <TypeAnimation
                sequence={[
                  "Mehmet Papila",
                  2000,
                  "Software Engineer",
                  1000,
                  "Full Stack Engineer",
                  1000,
                  "Tech Enthusiast",
                  1000,
                  "Support Engineer",
                  1000,
                  "Husband",
                  500,
                  "Small Business Owner",
                  500,
                ]}
                repeat={Infinity}
                style={{ fontSize: "80px", display: "inline-block" }}
              />{" "}
              <Typography
              //  fontFamily="source-sans-3"
              >
                Based in Houston, Texas
              </Typography>
              <Box pt={2}>
                <IconButton
                  color="inherit"
                  href="https://github.com/mpapila"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>

                <IconButton
                  color="inherit"
                  href="https://www.linkedin.com/in/mehmet-papila-31502980/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>

            <Box
              id="arrow"
              sx={{
                "@keyframes ball": {
                  "0%": {
                    bottom: "0px",
                  },
                  "25%": {
                    bottom: "10px",
                  },
                  "50%": {
                    bottom: "0px",
                  },
                  "75%": {
                    bottom: "10px",
                  },
                  "100%": {
                    bottom: "0px",
                  },
                },
                position: "relative",
                animation: "ball 2s ease infinite",
                borderRadius: "100px",
                display: "flex",
                backgroundColor: "#0F151B",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ArrowDownIcon sx={{ fontSize: "70px" }} />
            </Box>
          </Box>
          <Box id="about" pt={5}>
            <About />
          </Box>
          <Box id="skills" pt={5}>
            <Skills />
          </Box>
          <Box id="experience" pt={5}>
            <Experiences />
          </Box>

          <Box id="projects" pt={5} mb={5}>
            <Projects />
          </Box>
          <Box id="contact" pt={5} style={{ marginBottom: "20%" }}>
            <Contact />
          </Box>
        </Box>
        <Box> {isPhoneScreen && <Footer />}</Box>
      </Box>
      <Box height="100vh" sx={{ width: !isPhoneScreen ? "10%" : "0" }}></Box>
    </Box>
  );
}

export default App;
