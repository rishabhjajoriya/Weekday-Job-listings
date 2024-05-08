import { faIndianRupeeSign, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useState } from "react";


const CustomDescription = styled("p")(({ expanded }) => ({
    maxHeight: expanded ? "130px" : 150,
    overflow: expanded ? "auto" : "hidden",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "100%",
      height: expanded ? "1rem" : "3.0em",
      background:
        "linear-gradient(to bottom, rgba(255, 255, 255, 0) -100px, white)",
      transition: "height 0.3s ease-out",
    },
    fontFamily: "Lexend",
  }));

const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggleExpand = () => {
      setExpanded(!expanded);
    };
    return (
        <>
        <Card
        sx={{
          height: 600,
          borderRadius: 5,
          border: "1px solid #CCCCCC",
          boxShadow: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ minWidth: 50, minHeight: 60, padding: 2, display: "flex" }}>
          <CardMedia
            component="img"
            alt={job.companyName}
            image={job.logoUrl}
            sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 2 }} // Adjust size and style as needed
          />
          <Box marginLeft={2}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              marginBottom={-1}
              sx={{ fontFamily: "Lexend" }}
            >
              {job.companyName}
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              component="p"
              sx={{ fontFamily: "Lexend" }}
            >
              {job.jobRole}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{ fontFamily: "Lexend" }}
            >
              {job.location}
            </Typography>
          </Box>
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "16px",
            fontFamily: "Lexend",
          }}
        >
          {/* salary */}
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{ fontFamily: "Lexend" }}
          >
            <span style={{ fontWeight: "bold" }}>
              Estimated Salary : <FontAwesomeIcon icon={faIndianRupeeSign} />
              {job.minJdSalary == null ? 0 : job.minJdSalary} -{" "}
              {job.maxJdSalary} LPA{" "}
            </span>
       
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#03C30A" }}
            />
          </Typography>

          {/* About company description */}
          <Box className="identify">
            <Typography
              variant="h7"
              color="black"
              component="p"
              fontWeight="bold"
              sx={{ fontFamily: "Lexend" }}
            >
              About Company:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              fontWeight="bold"
              sx={{ fontFamily: "Lexend" }}
            >
              About us
            </Typography>
            <CustomDescription expanded={expanded}>
              {job.jobDetailsFromCompany}
            </CustomDescription>

            {job.jobDetailsFromCompany.length > 100 && (
              <Button
                onClick={handleToggleExpand}
                color="primary"
                sx={{
                  textTransform: "none",
                  fontFamily: "Lexend",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {expanded ? "View Less" : "View Job"}
              </Button>
            )}
          </Box>

          {/* experience */}
          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              fontWeight="bold"
              sx={{ fontFamily: "Lexend" }}
            >
              Minimum Experience
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{ fontFamily: "Lexend" }}
            >
              {job.minExp == null ? 0 : job.minExp} years
            </Typography>
          </Box>

          {/* buttons */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#54EFC4",
              color: "black",
              textTransform: "none",
              borderRadius: 2,
              padding: 1,
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: 15,
              fontFamily: "Lexend",
            }}
            href={job.jdLink}
          >
            <FontAwesomeIcon icon={faBolt} style={{ color: "yellow" }} /> Easy
            Apply
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4943DA",
              color: "white",
              textTransform: "none",
              borderRadius: 2,
              padding: 1,
              marginBottom: 0,
              fontSize: 15,
              fontFamily: "Lexend",
            }}
          >
            Unlock referral asks
          </Button>
        </CardContent>
      </Card>
        </>
    );
};

export default JobCard;