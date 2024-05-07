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
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
  import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
  import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";


const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggleExpand = () => {
      setExpanded(!expanded);
    };
    return (
        <>
        


        </>
    );
};

export default JobCard;