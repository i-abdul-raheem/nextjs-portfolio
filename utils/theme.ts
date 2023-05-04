import { Box, styled } from "@mui/material";
import { useIsMobileView } from "./utils";

export const Container = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    position: "relative",
    width: isMobileView ? "100%" : "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
});
