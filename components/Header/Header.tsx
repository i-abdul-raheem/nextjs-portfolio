import { Logo } from "@/assets";
import { Container, useIsMobileView } from "@/utils";
import { Box, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import {
  CustomMenu,
  MenuButton,
  ResumeButton,
  Row,
  UnorderedList,
} from "./elements";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SideBar } from "./SideBar";

export const Header = () => {
  const isMobileView = useIsMobileView();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  return (
    <Container>
      <Row>
        <Image
          src={Logo}
          alt="Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50px",
          }}
        />
        <Box sx={{ display: isMobileView ? "none" : "block" }}>
          <UnorderedList>
            <li>
              <Link onClick={() => console.log(1)} href="/">
                About
              </Link>
            </li>
            <li>
              <Link href="/">Skills</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Honor & Awards</Link>
            </li>
            <li>
              <Link href="/">Certificates</Link>
            </li>
          </UnorderedList>
        </Box>
        <ResumeButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Resume
        </ResumeButton>
        <CustomMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            PDF
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            JSON
          </MenuItem>
        </CustomMenu>
        <MenuButton
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MenuOpenIcon />
        </MenuButton>
        {showMenu && <SideBar />}
      </Row>
    </Container>
  );
};
