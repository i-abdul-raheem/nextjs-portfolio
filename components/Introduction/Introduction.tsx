import { Curve, MyPic } from "@/assets";
import { Container } from "@/utils";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageBox, LinkContainer, Row } from "./elements";

export const Introduction = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Container>
      <Row>
        <ImageBox
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        >
          {!hoverState ? (
            <Image
              src={MyPic}
              alt={"Abdul Raheem - MERN STACK DEVELOPER - CODE TEMPLATE"}
              style={{
                filter: "grayscale(100%)",
                width: "auto",
                height: "auto",
                boxShadow: "0px 5px 30px #333",
                borderRadius: "50%",
                zIndex: 999,
              }}
            />
          ) : (
            <Image
              src={MyPic}
              alt={"Abdul Raheem - MERN STACK DEVELOPER - CODE TEMPLATE"}
              style={{
                width: "auto",
                height: "auto",
                boxShadow: "0px 5px 30px dodgerblue",
                borderRadius: "50%",
                zIndex: 999,
              }}
            />
          )}
        </ImageBox>
        <Box
          sx={{
            padding: "32px",
          }}
        >
          <h1>HELLO 👋</h1>
          <h2 style={{ marginBottom: 32 }}>WELCOME TO MY PORTFOLIO</h2>
          <p>
            My name is{" "}
            <code>
              <b>ABDUL RAHEEM</b>
            </code>
            . I{"'"}m an experienced Software Engineer with 3+ years in the
            field, specializing in designing and developing software solutions
            that meet business needs. Skilled in various programming languages,
            including Java, Python, and JavaScript. Adept at collaborating with
            cross-functional teams to identify and solve complex technical
            problems. Passionate about staying up-to-date with the latest
            industry trends and technologies. Strong communication and
            interpersonal skills with a proven track record of delivering
            high-quality projects on time and within budget.
          </p>
          <LinkContainer>
            <Link href="https://github.com/i-abdul-raheem" target={"_blank"}>
              <GitHub sx={{ fontSize: 32, "&:hover": { color: "#14B8A6" } }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-raheem-67997525a/"
              target={"_blank"}
            >
              <LinkedIn
                sx={{ fontSize: 32, "&:hover": { color: "#14B8A6" } }}
              />
            </Link>
            <Link href="mailto:abdul.raheem.30140@gmail.com" target={"_blank"}>
              <Mail sx={{ fontSize: 32, "&:hover": { color: "#14B8A6" } }} />
            </Link>
          </LinkContainer>
        </Box>
      </Row>
      <Image
        src={Curve}
        alt="/\/\/\/\"
        style={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
};
