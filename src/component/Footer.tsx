import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      pt={1}
      pb={1}
      height="auto"
      width="100%"
      sx={{ backgroundColor: "#2E77C5" }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography fontSize="30px" fontFamily="source-sans-3">
          Mehmet Papila
        </Typography>
        <Box display="flex">
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
    </Box>
  );
}

export default Footer;
