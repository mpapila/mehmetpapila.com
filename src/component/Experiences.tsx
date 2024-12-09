import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { useState } from "react";

function Experiences() {
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down(801));
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  console.log("visiblesection", visibleSection);
  const toggleVisibility = (id: string) => {
    setVisibleSection((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <Box p={isPhoneScreen ? "8px" : 0}>
        <Typography
          mt={6}
          fontSize="60px"
          // textAlign="center"
          // borderBottom="1px solid white"
          // p={1}
          mb={5}
          display={!isPhoneScreen ? "none" : "block"}
          fontFamily="source-sans-3"
        >
          Experiences
        </Typography>
        <Box>
          <Box
            position="relative"
            id="experienceOne"
            mb={3}
            sx={{
              background: "#11171C",
              backgroundImage: "linear-gradient(135deg, #11171C, #243C4D)",
              // border: "1px solid grey",
              pt: 2,
              pb: 2,
              pr: 4,
              pl: 4,
              borderRadius: 4,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontWeight="bold" variant="h6">
                Database/System Administrator
              </Typography>
              <Typography variant="caption" color="#858591">
                May 2020 to December 2023
              </Typography>
            </Box>
            <Typography variant="overline" color="#858591">
              AVIVA WHOLESALE, INC., HOUSTON, TEXAS
            </Typography>
            <Typography
              variant="subtitle1"
              // textAlign="justify"
              fontFamily="source-sans-3"
            >
              Led the migration of data from Zoho CRM and QuickBooks POS to the
              managed MS SQL databases which served as the foundation for the
              company's technical infrastructure, to ensure the integrity of all
              the data from our various sales channels, including the e-commerce
              website, sister companies, and in-store transactions.
            </Typography>
            <Box
              // display="block"
              id="experienceOneExtra"
              sx={{
                maxHeight: visibleSection === "experienceOne" ? "500px" : "0",
                display: visibleSection === "experienceOne" ? "block" : "none",
                overflow: "hidden",
                transition: "max-height 0.3s ease-out, opacity 0.3s ease-out",
                opacity: visibleSection === "experienceOne" ? 1 : 0,
                padding: visibleSection === "experienceOne" ? "16px" : "0px",
              }}
            >
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Managed the implementation of SphereWMS, the company’s
                warehouse management system, customizing it’s product selection
                algorithm to streamline online orders and optimize warehouse
                efficiency.
              </Typography>
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Advised management on IT equipment purchases that fit our data
                infrastructure, saving thousands of dollars on unnecessary and
                incompatible server hardware, and improving operational
                efficiency for critical customer information, sales records, and
                inventory levels.
              </Typography>
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Led the delivery of high-quality technical support to
                customers, troubleshooting login problems, fixing payment
                processing errors, and providing guidance on navigating the
                site.
              </Typography>
              <Typography
                variant="body2"
                //  textAlign="justify"
                fontFamily="source-sans-3"
              >
                - Regularly interfaced with BigCommerce and Shopify product
                teams to keep the E-Commerce infrastructure running great.
              </Typography>
            </Box>
            <Box position="absolute" bottom="0" right="0">
              <IconButton
                color="inherit"
                onClick={() => toggleVisibility("experienceOne")}
              >
                {visibleSection === "experienceOne" ? (
                  <CloseFullscreenIcon fontSize="large" />
                ) : (
                  <OpenInFullIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Box>

          <Box
            position="relative"
            sx={{
              background: "#11171C",
              backgroundImage: "linear-gradient(135deg, #11171C, #243C4D)",
            }}
            id="experienceTwo"
            // border="1px solid grey"
            mb={3}
            pt={2}
            pb={2}
            pr={4}
            pl={4}
            borderRadius={4}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontWeight="bold" variant="h6">
                IT Assistant
              </Typography>
              <Typography variant="caption" color="#858591">
                May 2019 to April 2020
              </Typography>
            </Box>
            <Typography variant="overline" color="#858591">
              AVIVA WHOLESALE, INC., HOUSTON, TEXAS
            </Typography>
            <Typography variant="subtitle1" fontFamily="source-sans-3">
              Built the technical infrastructure for a high-volume B2B clothing
              storefront
            </Typography>
            <Box
              // display="block"
              id="experienceTwoExtra"
              sx={{
                display: visibleSection === "experienceTwo" ? "block" : "none",
                overflow: "hidden",
                opacity: visibleSection === "experienceTwo" ? 1 : 0,
                padding: visibleSection === "experienceTwo" ? "16px" : "0px",
              }}
            >
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Led a project to enhance user experience on our Shopify
                front-end based on customer feedback, including using Shopify's
                Performance Analytics to speed-up page loading times, optimizing
                images through Image Optimizer, and fixing inaccurate
                connections between displayed product availability and the
                automated inventory management system.
              </Typography>
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Analyzed sales data with Microsoft Excel from sales channels
                like Quickbooks and Shopify to identify seasonal patterns sales
                volume between product models, providing insights that
                stabilized inventory management decisions, enhance marketing
                strategies, and increased sales revenue.
              </Typography>
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Found common ground between different stakeholders dealing
                with communication problems by planning and implementing a VoIP
                system that supported both internal and external communication.
              </Typography>
              <Typography
                variant="body2"
                //  textAlign="justify"
                fontFamily="source-sans-3"
              >
                - Resolved access problems, helped customers navigate the
                website effectively, addressed billing issues, and explained how
                the website works over the phone, email, and in person.
              </Typography>
            </Box>
            <Box position="absolute" bottom="0" right="0">
              <IconButton
                color="inherit"
                onClick={() => toggleVisibility("experienceTwo")}
              >
                {visibleSection === "experienceTwo" ? (
                  <CloseFullscreenIcon fontSize="large" />
                ) : (
                  <OpenInFullIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Box>

          <Box
            position="relative"
            sx={{
              background: "#11171C",
              backgroundImage: "linear-gradient(135deg, #11171C, #243C4D)",
            }}
            id="experienceThree"
            // border="1px solid grey"
            pt={2}
            pb={2}
            pr={4}
            pl={4}
            mb={3}
            borderRadius={4}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontWeight="bold" variant="h6">
                Software Engineer
              </Typography>
              <Typography variant="caption" color="#858591">
                August 2018 to May 2019
              </Typography>
            </Box>
            <Typography variant="overline" color="#858591">
              EFE INTERNATIONAL INC., CHICAGO ILLINOIS
            </Typography>
            <Typography variant="subtitle1" fontFamily="source-sans-3">
              Developed full-stack applications using C# and .NET to support the
              operational needs of a large Midwest reseller, enhancing data
              management and improving customer trust.
            </Typography>
            <Box
              // display="block"
              id="experienceThreeExtra"
              sx={{
                display:
                  visibleSection === "experienceThree" ? "block" : "none",
                overflow: "hidden",
                opacity: visibleSection === "experienceThree" ? 1 : 0,
                padding: visibleSection === "experienceThree" ? "16px" : "0px",
              }}
            >
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Architected a technical strategy to manage e-commerce data by
                listening to non-technical stakeholders and collaborated to plan
                the software we needed.
              </Typography>
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Created a software tool with C# and .Net that migrates
                products between the Ebay’s listing API and a secure database.
                Creating this tool to boost search engine rankings with accurate
                product listings and to improve the company's reputation by
                keeping our website trustworthy and well-maintained.
              </Typography>
              <Typography
                variant="body2"
                // textAlign="justify"
                pb={1}
                fontFamily="source-sans-3"
              >
                - Took on the task to manually enter data into the input system
                every day to ensure the product catalog was always up to date.
              </Typography>
              <Typography
                variant="body2"
                //  textAlign="justify"
                fontFamily="source-sans-3"
              >
                - Took ownership of the project to ensure 100% up time through
                testing, troubleshooting, and providing personal technical
                support.
              </Typography>
            </Box>
            <Box position="absolute" bottom="0" right="0">
              <IconButton
                color="inherit"
                onClick={() => toggleVisibility("experienceThree")}
              >
                {visibleSection === "experienceThree" ? (
                  <CloseFullscreenIcon fontSize="large" />
                ) : (
                  <OpenInFullIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Experiences;
