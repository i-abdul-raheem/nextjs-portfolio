import Head from "next/head";
import { Inter } from "next/font/google";
import { Header, LandingWrapper } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdul Raheem | MERN Stack Developer</title>
        <meta
          name="description"
          content="I am Abdul Raheem, a skilled MERN stack developer with experience in Next.js and Material UI. Browse my portfolio for examples of my work and contact me to discuss your project."
        />
        <meta name="keywords" content="Abdul Raheem, MERN stack, Next.js, Material UI, developer, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingWrapper />
    </>
  );
}
