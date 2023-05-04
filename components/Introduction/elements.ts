import { useIsMobileView } from "@/utils";
import { Box, styled } from "@mui/material";

export const Row = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 40,
    rowGap: 40,
    minHeight: 812,
    flexDirection: isMobileView ? "column" : "row",
  };
});

export const ImageBox = styled(Box)({
  position: "relative",
  overflow: "visible",
  padding: 32,
});

export const LinkContainer = styled(Box)({
  display: "flex",
  columnGap: 20,
  marginTop: 32,
});
