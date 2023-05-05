import { Awards } from "../Awards";
import { Certificates } from "../Certificates";
import { Contact } from "../Contact";
import { Introduction } from "../Introduction";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { useEffect, useRef } from "react";
import { CursorBig, CursorSmall } from "./elements";

export const LandingWrapper = () => {
  const cursor: any = useRef<HTMLDivElement>();
  const cursorDot: any = useRef<HTMLDivElement>();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.current.style.left = e.pageX + "px";
      cursor.current.style.top = e.pageY + "px";
      cursorDot.current.style.left = e.pageX + "px";
      cursorDot.current.style.top = e.pageY + "px";
    });
  }, [cursor]);
  return (
    <>
      <Introduction />
      <Skills />
      <Projects />
      <Awards />
      <Certificates />
      <Contact />
      <CursorBig ref={cursor} />
      <CursorSmall ref={cursorDot} />
    </>
  );
};
