import { AboutMe } from "./components/AboutMe";
import { Focus } from "./components/Focus";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import candidatos from '@/app/cadidatos.json'
import { KnowMore } from "./components/KnowMore";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 bg-blue-600">
      <Header/>
      <Hero/>
      <AboutMe fotoRetrato={candidatos[0].fotoPerfilRetrato} paragrafos={candidatos[0].sobreMimParagrafos} />
      <Focus focusItems={candidatos[0].focos}/>
      <KnowMore knowImage={candidatos[0].fotoPerfilRetrato}/>
    </div>
  );
}
