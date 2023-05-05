import { Curve } from "@/assets";
import { Container } from "@/utils";
import Image from "next/image";
import { Heading, Row } from "./elements";

export const Awards = () => {
  return (
    <Container id="awards">
      <Row>
        <Image src={Curve} alt="curvy divider" style={{ width: 300 }} />
        <Heading>Honors &amp; Awards</Heading>
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
