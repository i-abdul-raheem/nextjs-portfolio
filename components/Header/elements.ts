import { useIsMobileView } from "@/utils";
import { Box, Button, Menu, styled } from "@mui/material";

export const Row = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "14px 16px",
  marginBottom: "20px",
});

export const UnorderedList = styled("ul")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "30px",
  listStyle: "none",
});

export const ResumeButton = styled(Button)(() => {
  const isMobileView = useIsMobileView();
  return {
    color: "#fff",
    backgroundColor: "#14B8A6",
    boxShadow: "1px 1px 10px #14B8A6",
    border: "none",
    display: isMobileView ? "none" : "block",
    "&:hover": {
      backgroundColor: "#14B8A6CC",
    },
  };
});

export const MenuButton = styled(Button)(() => {
  const isMobileView = useIsMobileView();
  return {
    color: "#fff",
    backgroundColor: "#14B8A6",
    boxShadow: "1px 1px 10px #14B8A6",
    border: "none",
    display: isMobileView ? "block" : "none",
    borderRadius: 50,
    "&:hover": {
      backgroundColor: "#14B8A6CC",
    },
  };
});

export const CustomMenu = styled(Menu)({
  "& ul": {
    backgroundColor: "#666",
    color: "#fff",
  },
});
