import {
  ArrowDropDownRounded,
  ArrowDropUpRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { Container, CustomLink } from "./elements";

export const SideBar = () => {
  const [showResume, setShowResume] = useState<Boolean>(false);
  return (
    <Container>
      <CustomLink href={"/"}>About</CustomLink>
      <CustomLink href={"/"}>Skills</CustomLink>
      <CustomLink href={"/"}>Projects</CustomLink>
      <CustomLink href={"/"}>Honor & Awards</CustomLink>
      <CustomLink href={"/"}>Certificates</CustomLink>
      <CustomLink href={"#"} onClick={() => setShowResume(!showResume)}>
        Resume {showResume ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />}
      </CustomLink>
      {showResume && (
        <>
          <CustomLink href={"/"}>PDF</CustomLink>
          <CustomLink href={"/"}>JSON</CustomLink>
        </>
      )}
    </Container>
  );
};
