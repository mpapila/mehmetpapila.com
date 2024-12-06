import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Ticker from "framer-motion-ticker";
import { useState } from "react";
import css from "../icons/css.svg";
import express from "../icons/express.svg";
import html from "../icons/html.svg";
import javascript from "../icons/javascript.svg";
import jest from "../icons/jest.svg";
import sql from "../icons/sql.svg";
import mui from "../icons/mui.svg";
import mongodb from "../icons/mongodb.svg";
import mysql from "../icons/mysql.svg";
import node from "../icons/node.svg";
import postgresql from "../icons/postgresql.svg";
import react from "../icons/react.svg";
import typescript from "../icons/typescript.svg";
import vite from "../icons/vite.svg";
import git from "../icons/git.svg";
import npm from "../icons/npm.svg";
import reduxlogo from "../icons/redux.svg";
import reactRouter from "../icons/react-router.svg";
import socketIo from "../icons/socket-io.svg";
import postman from "../icons/postman.svg";
import linux from "../icons/linux.svg";
import vscode from "../icons/vscode.svg";
import zod from "../icons/zod.svg";
import jwt from "../icons/jwt.svg";
import prisma from "../icons/prisma.svg";

function Skills() {
  const [isPlaying, setIsPlaying] = useState(true);

  const skills = [
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
    { src: typescript, name: "TypeScript" },
    { src: javascript, name: "JavaScript" },
    { src: sql, name: "SQL" },
    { src: express, name: "Express" },
    { src: node, name: "Node.js" },
    { src: mongodb, name: "MongoDB" },
    { src: mysql, name: "MySQL" },
    { src: postgresql, name: "PostgreSQL" },
    { src: react, name: "React" },
    { src: jest, name: "Jest" },
    { src: vite, name: "Vite" },
    { src: mui, name: "Material UI" },
    { src: git, name: "Git" },
    { src: prisma, name: "Prisma ORM" },
    { src: npm, name: "NPM" },
    { src: zod, name: "Zod" },
    { src: reduxlogo, name: "Redux" },
    { src: jwt, name: "Json Web Token" },
    { src: reactRouter, name: "React Router" },
    { src: socketIo, name: "Socket IO" },
    { src: postman, name: "Postman" },
    { src: linux, name: "Linux" },
    { src: vscode, name: "VS Code" },
  ];
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down(801));

  return (
    <Box>
      <Typography
        fontSize="70px"
        // textAlign="center"
        // borderBottom="1px solid white"
        pt={isPhoneScreen ? "8px" : 0}
        mb={5}
        p={isPhoneScreen ? "8px" : 0}
        display={!isPhoneScreen ? "none" : "block"}
        fontFamily="source-sans-3"
      >
        Skills
      </Typography>
      <Box
        textAlign="center"
        mb={1}
        width="100%"
        maxHeight="90px"
        borderRadius="30px"
        // border="1px white solid"
      >
        <Ticker
          duration={75}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          isPlaying={isPlaying}
        >
          {skills.map((item, i) => (
            <Tooltip key={i} title={item.name} arrow>
              <Box
                sx={{
                  backgroundColor: "#0f1214",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // margin: "5px",
                  cursor: "pointer", // Pointer cursor for hoverable items
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.name}
                  sx={{
                    height: "60px",
                    width: "100px",
                  }}
                />
              </Box>
            </Tooltip>
          ))}
        </Ticker>
      </Box>
    </Box>
  );
}

export default Skills;
