import Grid from "@mui/material/Grid2";
import messagingAppDesktop from "../images/messaging-app-desktop.jpg";
import messagingAppMobile from "../images/messaging-app-mobile2.jpg";
import odinBookDesktop from "../images/odin-book-desktop.jpg";
import odinBookMobile from "../images/odin-book-mobile.jpg";
import blogDesktop from "../images/blog-desktop.jpg";
import blogMobile from "../images/blog-mobile.jpg";

import waldoDesktop from "../images/waldo-desktop.jpg";
import waldoMobile from "../images/waldo-mobile.jpg";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import bcrypt from "../icons/bcrypt1.png";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  SiExpress,
  SiSocketdotio,
  SiMysql,
  SiMui,
  SiJsonwebtokens,
  SiPrisma,
  SiReactrouter,
  SiVite,
} from "react-icons/si";
import "../index.css";

function Projects() {
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down(801));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down(1225));

  return (
    <>
      <Typography
        // variant="h4"
        // textAlign="center"
        fontSize="70px"
        // borderBottom="1px solid white"
        p={1}
        mb={5}
        display={!isPhoneScreen ? "none" : "block"}
        fontFamily="source-sans-3"
      >
        Projects
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        gap={1}
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gridGap: "40px" }}
        id="grid-container"
      >
        <Box
          id="messasing-app"
          display="grid"
          gridTemplateColumns="repeat(auto-fill,minmax(400px, 1fr))"
          // gap="1px"
          pb={1}
          sx={{
            borderRadius: "5px",
            // backgroundColor: "#1a1a1a",
            background: "#0f1214",
            backgroundImage: "radial-gradient(circle, #1c1818,#0f1214)",
            // width: "404px",
            width: isTabletScreen ? "404px" : "100%",
            color: "white",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "400px",
              "&:hover": {
                "& .hover-blur": {
                  filter: "blur(4px)",
                  transform: "scale(1)",
                },
                "& .hover-overlay": {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              component="img"
              alt="Messaging App Desktop"
              src={messagingAppDesktop}
              className="hover-blur"
              // border="1px solid #BA143D"
              borderRadius="10px"
              // mr="50px"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "left",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              component="img"
              src={messagingAppMobile}
              className="hover-blur"
              border="1px solid grey"
              borderRadius="30px"
              sx={{
                width: "25%",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              className="hover-overlay"
              pt={1}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Full Stack Messaging App
              </Typography>
              <Typography variant="body2" mt={2} fontFamily="source-sans-3">
                This full-stack real-time messaging application combines a
                robust frontend and backend to deliver a seamless user
                experience. The frontend, built with React, TypeScript, and
                Redux Toolkit, leverages Socket.IO for real-time communication,
                enabling features like instant messaging, friend request
                management, and dynamic updates to chat lists and rooms. The
                backend, developed using Express and TypeScript, handles user
                authentication, friend request workflows, and the real-time chat
                system, with Prisma ORM managing interactions with a MySQL
                database. Together, these technologies create a scalable,
                secure, and interactive platform for real-time communication.
              </Typography>
              <Box mt={3}>
                <Typography display="flex" alignItems="center">
                  <LaunchIcon />
                  <a
                    href="https://messaging-app-client-side.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Live Demo
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />

                  <a
                    href="https://github.com/mpapila/Messaging-App-Server-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Server Side
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />
                  <a
                    href="https://github.com/mpapila/Messaging-App-Client-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Client Side
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid
            mt={1}
            container
            pl={1}
            gap={1}
            display="grid"
            sx={{
              // gridTemplateRows: "1fr 1fr 1fr 1fr;",
              gridTemplateRows: "repeat(4, 1fr)",
              gridTemplateColumns: "repeat(3, 1fr)",
              // alignItems: "center",
            }}
          >
            <Grid display="flex" mr={1} alignItems="center">
              <BiLogoTypescript color="#2E77C5" size="30px" />
              <Typography ml="4px" variant="subtitle2">
                Typescript
              </Typography>
            </Grid>
            <Box display="flex" mr={1} alignItems="center">
              <SiExpress color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Express
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoReact color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                React
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiMysql color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                MySql
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiSocketdotio color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Socket IO
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoRedux color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                Redux Toolkit
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiMui color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Material UI
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiJsonwebtokens color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                JWT
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <Box
                pl="4px"
                mr="4px"
                component="img"
                src={bcrypt}
                width="25px"
                height="25px"
              ></Box>
              <Typography ml="3px" variant="subtitle2">
                Bcrypt
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiVite color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Vite
              </Typography>
            </Box>

            <Box display="flex" mr={1} alignItems="center">
              <SiPrisma color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Prisma ORM
              </Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiReactrouter color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                React Router
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoMongodb color="#2E77C5" size="30px" />
              <Typography variant="subtitle2">MongoDB</Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoPostgresql color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                PostgreSQL
              </Typography>
            </Box> */}
          </Grid>
        </Box>

        <Box
          id="odinbook"
          display="grid"
          gridTemplateColumns="repeat(auto-fill,minmax(400px, 1fr))"
          // gap="1px"
          pb={1}
          sx={{
            borderRadius: "5px",
            // backgroundColor: "#1a1a1a",
            background: "#0f1214",
            backgroundImage: "radial-gradient(circle, #1c1818,#0f1214)",
            // width: "404px",
            width: isTabletScreen ? "404px" : "100%",
            color: "white",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "400px",
              "&:hover": {
                "& .hover-blur": {
                  filter: "blur(4px)",
                  transform: "scale(1)",
                },
                "& .hover-overlay": {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              component="img"
              alt="Odin Book Desktop"
              src={odinBookDesktop}
              className="hover-blur"
              // border="1px solid #BA143D"
              borderRadius="10px"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "left",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              component="img"
              src={odinBookMobile}
              className="hover-blur"
              border="1px solid grey"
              borderRadius="30px"
              sx={{
                width: "25%",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              className="hover-overlay"
              pt={1}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Odin Book
              </Typography>
              <Typography variant="body2" mt={2} fontFamily="source-sans-3">
                Odin Book is a social networking app with a React frontend and
                an Express.js backend. It features secure user authentication,
                friend requests, post creation, comments, reactions, and profile
                management. The PostFeed shows friends' posts, while the Sidebar
                ensures smooth navigation. The backend supports user
                registration, authentication, CRUD operations for posts and
                comments, notifications, and friend management. Daily birthday
                alerts and intuitive API endpoints enhance user experience,
                making Odin Book a dynamic and interactive platform.
              </Typography>
              <Box mt={3}>
                <Typography display="flex" alignItems="center">
                  <LaunchIcon />
                  <a
                    href="https://odin-book-client-side.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Live Demo
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />

                  <a
                    href="https://github.com/mpapila/Odin-Book-Server-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Server Side
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />
                  <a
                    href="https://github.com/mpapila/Odin-Book-Client-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Client Side
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid
            mt={1}
            container
            pl={1}
            gap={1}
            display="grid"
            sx={{
              // gridTemplateRows: "1fr 1fr 1fr 1fr;",
              gridTemplateRows: "repeat(4, 1fr)",
              gridTemplateColumns: "repeat(3, 1fr)",
              // alignItems: "center",
            }}
          >
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoTypescript color="#2E77C5" size="30px" />
              <Typography variant="subtitle2" ml="4px">
                Typescript
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiExpress color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Express
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoReact color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                React
              </Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiMysql color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                MySql
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiSocketdotio color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Socket IO
              </Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <Box
                pl="4px"
                mr="4px"
                component="img"
                src={bcrypt}
                width="25px"
                height="25px"
              ></Box>
              <Typography ml="3px" variant="subtitle2">
                Bcrypt
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoRedux color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                Redux Toolkit
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiMui color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Material UI
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiJsonwebtokens color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                JWT
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoMongodb color="#2E77C5" size="30px" />
              <Typography variant="subtitle2">MongoDB</Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoPostgresql color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                PostgreSQL
              </Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <SiVite color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Vite
              </Typography>
            </Box>

            {/* <Box display="flex" mr={1} alignItems="center">
              <SiPrisma color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Prisma ORM
              </Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <SiReactrouter color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                React Router
              </Typography>
            </Box>
          </Grid>
        </Box>

        <Box
          id="blog"
          display="grid"
          gridTemplateColumns="repeat(auto-fill,minmax(400px, 1fr))"
          // gap="1px"
          pb={1}
          sx={{
            borderRadius: "5px",
            // backgroundColor: "#1a1a1a",
            background: "#0f1214",
            backgroundImage: "radial-gradient(circle, #1c1818,#0f1214)",
            width: isTabletScreen ? "404px" : "100%",
            color: "white",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "400px",
              "&:hover": {
                "& .hover-blur": {
                  filter: "blur(4px)",
                  transform: "scale(1)",
                },
                "& .hover-overlay": {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              component="img"
              alt="Blog App Desktop"
              src={blogDesktop}
              className="hover-blur"
              // border="1px solid #BA143D"
              borderRadius="10px"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "left",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              component="img"
              src={blogMobile}
              className="hover-blur"
              border="1px solid grey"
              borderRadius="30px"
              sx={{
                width: "25%",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              className="hover-overlay"
              pt={1}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Blog Api
              </Typography>
              <Typography variant="body2" mt={2} fontFamily="source-sans-3">
                This personal blog app combines a React and TypeScript front end
                with a Node.js and Express backend. The front end features user
                authentication, a responsive design with Material-UI, and a rich
                text editor powered by TinyMCE for creating and managing posts.
                Key pages include Home, PostDetail, and NewPost, with seamless
                navigation via React Router. The backend uses Prisma and MySQL
                for database interactions, with JWT-based authentication and
                CRUD operations for users, posts, and comments. Secure API
                endpoints and middleware ensure robust functionality, making the
                blog an efficient platform for content creation and interaction.
              </Typography>
              <Box mt={3}>
                <Typography display="flex" alignItems="center">
                  <LaunchIcon />
                  <a
                    href="https://project-blog-api-client-side.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Live Demo
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />

                  <a
                    href="https://github.com/mpapila/Project-Blog-API-Server-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Server Side
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />
                  <a
                    href="https://github.com/mpapila/Project-Blog-API-Client-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Client Side
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid
            mt={1}
            container
            pl={1}
            gap={1}
            display="grid"
            sx={{
              // gridTemplateRows: "1fr 1fr 1fr 1fr;",
              gridTemplateRows: "repeat(4, 1fr)",
              gridTemplateColumns: "repeat(3, 1fr)",
              // alignItems: "center",
            }}
          >
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoTypescript color="#2E77C5" size="30px" />
              <Typography variant="subtitle2" ml="4px">
                Typescript
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiExpress color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Express
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoReact color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                React
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiMysql color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                MySql
              </Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiSocketdotio color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Socket IO
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoRedux color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                Redux Toolkit
              </Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <SiMui color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Material UI
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiJsonwebtokens color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                JWT
              </Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoMongodb color="#2E77C5" size="30px" />
              <Typography variant="subtitle2">MongoDB</Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoPostgresql color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                PostgreSQL
              </Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <SiVite color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Vite
              </Typography>
            </Box>

            <Box display="flex" mr={1} alignItems="center">
              <SiPrisma color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Prisma ORM
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <Box
                pl="4px"
                mr="4px"
                component="img"
                src={bcrypt}
                width="25px"
                height="25px"
              ></Box>
              <Typography ml="3px" variant="subtitle2">
                Bcrypt
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiReactrouter color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                React Router
              </Typography>
            </Box>
          </Grid>
        </Box>

        <Box
          id="waldo"
          display="grid"
          gridTemplateColumns="repeat(auto-fill,minmax(400px, 1fr))"
          // gap="1px"
          pb={1}
          sx={{
            borderRadius: "5px",
            // backgroundColor: "#1a1a1a",
            background: "#0f1214",
            backgroundImage: "radial-gradient(circle, #1c1818,#0f1214)",
            width: isTabletScreen ? "404px" : "100%",
            color: "white",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "400px",
              "&:hover": {
                "& .hover-blur": {
                  filter: "blur(4px)",
                  transform: "scale(1)",
                },
                "& .hover-overlay": {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              component="img"
              alt="Where is Waldo Desktop"
              src={waldoDesktop}
              className="hover-blur"
              // border="1px solid #BA143D"
              borderRadius="10px"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "left",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              component="img"
              src={waldoMobile}
              className="hover-blur"
              border="1px solid grey"
              borderRadius="30px"
              sx={{
                width: "25%",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Box
              className="hover-overlay"
              pt={1}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Where is Waldo
              </Typography>
              <Typography variant="body2" mt={2} fontFamily="source-sans-3">
                The "Where is Waldo" app is an interactive game built with a
                React, TypeScript, and Vite front end, and an Express backend
                with PostgreSQL. Players search for hidden characters in an
                image while a timer tracks their progress. The front end
                features a responsive design, dynamic image rendering, and score
                submission to a leaderboard. The backend offers secure RESTful
                APIs for validating character positions and managing the
                scoreboard, with Helmet, compression, and CORS enhancing
                security and performance. Together, the app delivers a fun and
                seamless experience for users of all devices.
              </Typography>
              <Box mt={3}>
                <Typography display="flex" alignItems="center">
                  <LaunchIcon />
                  <a
                    href="https://where-is-waldo-client-side.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Live Demo
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />

                  <a
                    href="https://github.com/mpapila/Where-is-Waldo-Server-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Server Side
                  </a>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <GitHubIcon />
                  <a
                    href="https://github.com/mpapila/Where-is-Waldo-Client-Side"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00acee", marginLeft: "5px" }}
                  >
                    Client Side
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid
            mt={1}
            container
            pl={1}
            gap={1}
            display="grid"
            sx={{
              // gridTemplateRows: "1fr 1fr 1fr 1fr;",
              gridTemplateRows: "repeat(3, 1fr)",
              gridTemplateColumns: "repeat(2, 1fr)",
              // alignItems: "center",
            }}
          >
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoTypescript color="#2E77C5" size="30px" />
              <Typography variant="subtitle2" ml={1}>
                Typescript
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiExpress color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Express
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoReact color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                React
              </Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiMysql color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                MySql
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiSocketdotio color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Socket IO
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoRedux color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                Redux Toolkit
              </Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <SiMui color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Material UI
              </Typography>
            </Box>
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiJsonwebtokens color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                JWT
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <BiLogoMongodb color="#2E77C5" size="30px" />
              <Typography variant="subtitle2">MongoDB</Typography>
            </Box> */}
            <Box display="flex" mr={1} alignItems="center">
              <BiLogoPostgresql color="#2E77C5" size="30px" />
              <Typography ml={1} variant="subtitle2">
                PostgreSQL
              </Typography>
            </Box>
            <Box display="flex" mr={1} alignItems="center">
              <SiVite color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Vite
              </Typography>
            </Box>

            {/* <Box display="flex" mr={1} alignItems="center">
              <SiPrisma color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                Prisma ORM
              </Typography>
            </Box> */}
            {/* <Box display="flex" mr={1} alignItems="center">
              <SiReactrouter color="#2E77C5" size="25px" />
              <Typography ml={1} variant="subtitle2">
                React Router
              </Typography>
            </Box> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
