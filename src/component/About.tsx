import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

function About() {
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down(801));
  return (
    <Box p={isPhoneScreen ? "8px" : 0}>
      <Typography
        fontSize="70px"
        // textAlign="center"
        // borderBottom="1px solid white"
        // p={1}
        display={!isPhoneScreen ? "none" : "block"}
        mb={5}
        fontFamily="source-sans-3"
      >
        About Me
      </Typography>
      <Typography
        // textAlign="justify"
        fontFamily="source-sans-3"
        fontSize="20px"
      >
        I am an experienced database/system administrator, technical support
        specialist, and software engineer. My ambition is to become a leading
        MERN stack expert. I hold a Bachelor's degree in Computer Science, which
        gives me a strong foundation in application design and efficient
        implementation. <br />
        <br /> I have completed the Odin Project Full Stack Javascript
        Curriculum. I built from there using courses from several online
        platforms and custom 1 on 1 mentoring from senior engineers. I have
        studied JavaScript, TypeScript, Node, React, Express, and MongoDB
        intensively, and I am excited to put my new skills into practice.
      </Typography>
    </Box>
  );
}

export default About;
