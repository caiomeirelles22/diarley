import { AboutMe } from "./components/AboutMe";
import { Focus } from "./components/Focus";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Focus/>
    </div>
  );
}
