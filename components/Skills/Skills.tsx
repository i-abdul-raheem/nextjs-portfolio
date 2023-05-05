import { Curve } from "@/assets";
import { Container } from "@/utils";
import Image from "next/image";
import { Heading, Row } from "./elements";

export const Skills = () => {
  return (
    <Container id="skills">
      <Row>
        <Image src={Curve} alt="curvy divider" style={{ width: 300 }} />
        <Heading>Skills</Heading>
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
