import { useIsMobileView } from "@/utils";
import { Box, styled } from "@mui/material";
import Link from "next/link";

export const CustomLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "16px 20px",
  "&:hover": {
    backgroundColor: "#0005",
  },
});

export const Container = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    position: "fixed",
    width: "100%",
    height: "calc(100vh - 78px)",
    backgroundColor: "#111",
    top: 78,
    right: 0,
    display: isMobileView ? "block" : "none",
  };
});
