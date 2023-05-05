import { Curve } from "@/assets";
import { Container } from "@/utils";
import Image from "next/image";
import { Heading, Row } from "./elements";

export const Projects = () => {
  return (
    <Container id="projects">
      <Row>
        <Image src={Curve} alt="curvy divider" style={{ width: 300 }} />
        <Heading>Projects</Heading>
        <Image src={Curve} alt="curvy divider" style={{ width: 300 }} />

      </Row>
      <Image
        src={Curve}
        alt="curvy divider"
        style={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
};
