import React from "react";
import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Float = () => {
  const phoneNumber = "SM_Technologies"; // Change to your desired number
  const whatsappLink = `https://chat.whatsapp.com/JJcKDqL7b2e85wTrN9yBEZ`;
  // `https://wa.me/91${phoneNumber}`; // wa.me format for WhatsApp

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 10px",
    borderRadius: "50px",
    cursor: "pointer",
    overflow: "hidden",
    transition: "width 1s ease, padding 0.3s ease",
    width: "50px", // circle shape by default
    whiteSpace: "nowrap",
  };

  const textStyle = {
    marginLeft: "8px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  const handleClick = () => {
    window.open(whatsappLink, "_blank"); // Opens in new tab
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "40%",
        right: "10px",
        zIndex: 1000,
      }}
    >
      {/* WhatsApp */}
      <Box
        onClick={handleClick}
        sx={{
          ...buttonStyle,
          "&:hover": { width: "205px", padding: "8px 16px" },
          "&:hover .text": { opacity: 1 },
        }}
      >
        <WhatsAppIcon fontSize="large" />
        <Typography className="text" sx={textStyle}>
          {phoneNumber}
        </Typography>
      </Box>
    </Box>
  );
};
export default Float;