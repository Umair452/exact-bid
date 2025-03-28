import About from "../components/About";
import Hero from "../sections/Hero";
import Sample from "../sections/Sample";
import StatsCounter from "../components/Counter";

export default function HomeScreen() {
  return (
    <>
      <Hero />
      <About />
      <Sample />
      <StatsCounter />
    </>
  );
}
