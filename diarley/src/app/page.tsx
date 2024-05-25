import { AboutMe } from "./sections/AboutMe";
import { Focus } from "./sections/Focus";
import { Galery } from "./sections/Galery";
import { Hero } from "./sections/Hero";
import { KnowMore } from "./sections/KnowMore";
import candidatos from '@/app/cadidatos.json'
import { SocialMedias } from "./sections/SocialMedias";
import { Footer } from "./sections/Footer";
import { NavBar } from "./sections/NavBar";


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-2 bg-blue-600">
      <NavBar />
      <Hero />
      <AboutMe fotoRetrato={candidatos[0].fotoPerfilRetrato} paragrafos={candidatos[0].sobreMimParagrafos} />
      <Focus focusItems={candidatos[0].focos} />
      <Galery images={candidatos[0].galeria} />
      <SocialMedias links={candidatos[0].links} />
      <KnowMore knowImage={candidatos[0].fotoPerfilRetrato} />
      <Footer links={candidatos[0].links}/>
    </div>
  );
}
