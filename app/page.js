import { About, Contact, Experience, Footer, Hero, Portfolio, Skills, TopNav } from './components';

export default function Home() {
  return (
    <main>
      <TopNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
