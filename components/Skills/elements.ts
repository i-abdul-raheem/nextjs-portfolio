import { Box, styled, Typography } from "@mui/material";

export const Row = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 800,
  flexDirection: "column",
  rowGap: 20,
  padding: 32,
});

export const Heading = styled(Typography)({
  fontWeight: "bold",
  fontSize: 32,
});
