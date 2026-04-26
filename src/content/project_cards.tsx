
interface WorkProps {
  title: string;
  desc: string;
  link: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    title: "Origin Two",
    desc: "2D game + game engine built from the ground up",
    link: "/origintwo",
    image: "/images/OriginTwo/header.jpg",
  },
     {
    title: "Ninja Mouse",
    desc: "3D game + game engine built from the ground up",
    link: "/ninjamouse",
    image: "/images/NinjaMouse/header.jpg",
  },
  {
    title: "Cobblestone Shader",
    desc: "a procedural shader network that transforms any surface into mossy cobblestone",
    link: "/cobblestone",
    image: "/images/Cobblestone/header.jpg",
  },
  {
    title: "Xiang",
    desc: "fully rigged and animated 3d character model",
    link: "/xiang",
    image: "/images/Xiang/header.jpg",
  },
 
  {
    title: "Bear Necessiteas",
    desc: "3D game + game engine built from the ground up",
    link: "/bear",
    image: "/images/Bear/header.png",
  },
]

export default info;