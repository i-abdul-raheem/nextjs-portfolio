import { useIsMobileView } from "@/utils";
import { Box, styled, Typography } from "@mui/material";
import Link from "next/link";

export const Row = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 800,
  flexDirection: "column",
  rowGap: 20,
  padding: 32,
  width: "100%",
});

export const Heading = styled(Typography)({
  fontWeight: "bold",
  fontSize: 32,
});

export const CustomLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: 32,
  fontSize: 20,
  columnGap: 32,
});

export const Left = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
});

export const CustomBox = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    padding: 32,
    flexDirection: isMobileView ? "column" : "row",
  };
});

export const Right = styled("form")({
  width: "100%",
  border: "1px solid #fff",
  padding: 32,
  borderRadius: 20,
});

export const FormRow = styled(Box)({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 20,
});

export const CustomInput = styled("input")({
  width: "100%",
  padding: "10px 20px",
  marginBottom: 20,
  border: "1px solid #ddd",
  borderRadius: 50,
});

export const CustomTextarea = styled("textarea")({
  width: "100%",
  padding: "10px 20px",
  marginBottom: 20,
  border: "1px solid #ddd",
  borderRadius: 20,
});

export const CustomButton = styled("button")({
  width: "100%",
  padding: "10px 20px",
  borderRadius: 50,
  color: "#fff",
  backgroundColor: "#14B8A6",
  boxShadow: "1px 1px 10px #14B8A6",
  border: "none",
});
