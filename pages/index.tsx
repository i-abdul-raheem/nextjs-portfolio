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
          content="My name is ABDUL RAHEEM. I'm an experienced Software Engineer with 3+ years in the field, specializing in designing and developing software solutions that meet business needs. Skilled in various programming languages, including Java, Python, and JavaScript. Adept at collaborating with cross-functional teams to identify and solve complex technical problems. Passionate about staying up-to-date with the latest industry trends and technologies. Strong communication and interpersonal skills with a proven track record of delivering high-quality projects on time and within budget."
        />
        <meta
          name="keywords"
          content="Abdul Raheem, MERN stack, Next.js, Material UI, developer, portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingWrapper />
    </>
  );
}
