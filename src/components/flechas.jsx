import React from "react";
import Slider from "react-slick";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 1,
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "white",
        "& .MuiSvgIcon-root": {
          fontSize: "60px",
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "white",
        "& .MuiSvgIcon-root": {
          fontSize: "50px",
        },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};
export { NextArrow, PrevArrow };
