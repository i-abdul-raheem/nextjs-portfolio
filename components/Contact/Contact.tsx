import { Curve, Discord, Skype } from "@/assets";
import { Container } from "@/utils";
import { Mail, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import {
  CustomBox,
  CustomButton,
  CustomInput,
  CustomLink,
  CustomTextarea,
  FormRow,
  Heading,
  Left,
  Right,
  Row,
} from "./elements";

export const Contact = () => {
  return (
    <Container id="contact">
      <Row>
        <Image src={Curve} alt="curvy divider" style={{ width: 300 }} />
        <Heading>FEEL FREE TO CONTACT ANYTIME</Heading>
        <Image src={Curve} alt="curvy divider" style={{ width: 300 }} />
        <CustomBox>
          <Left>
            <CustomLink
              target={"_blank"}
              href={"mailto:abdul.raheem.30140@gmail.com"}
            >
              <Mail sx={{ fontSize: 42 }} />
              <span>abdul.raheem.30140@gmail.com</span>
            </CustomLink>
            <CustomLink
              target={"_blank"}
              href={"https://wa.me/923134386826?text=Hello%20Abdul%20Raheem"}
            >
              <WhatsApp sx={{ fontSize: 42 }} />
              <span>(+92)-313-438-6826</span>
            </CustomLink>
            <CustomLink target={"_blank"} href={"tel:+923134386826"}>
              <Image src={Discord} alt="discord" width={42} height={42} />
              <span>DISCORD_LINK</span>
            </CustomLink>
            <CustomLink target={"_blank"} href={"tel:+923134386826"}>
              <Image src={Skype} alt="skype" width={42} height={42} />
              <span>SKYPE_LINK</span>
            </CustomLink>
          </Left>
          <Right method="post">
            <FormRow>
              <h1>Send Message</h1>
            </FormRow>
            <hr /><br />
            <FormRow>
              <CustomInput
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
              <CustomInput
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </FormRow>
            <CustomInput
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <CustomTextarea
              name="message"
              id="message"
              placeholder="Message"
              rows={10}
            ></CustomTextarea>
            <CustomButton>Send Message</CustomButton>
          </Right>
        </CustomBox>
      </Row>
      <Image
        src={Curve}
        alt="curvy divider"
        style={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
};
