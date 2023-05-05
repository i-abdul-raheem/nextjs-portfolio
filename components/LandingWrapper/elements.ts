import { Box, styled } from "@mui/material";

export const CursorBig = styled(Box)({
  position: "absolute",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  transition: "0.1s",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  mixBlendMode: "difference",
});

export const CursorSmall = styled(Box)({
  position: "absolute",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  transition: "0.1s",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  mixBlendMode: "difference",
});
