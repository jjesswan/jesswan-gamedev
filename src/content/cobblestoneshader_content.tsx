type PortfolioInfo = {
  title: string;
  desc: string;
  link: string | null;
  linkLabel: string | null;
  role: string | null;
  tags: string[];
  image: string;
  isFat: boolean;
};

interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    desc: `I started by breaking cobblestone down into its core visual components: stone segmentation, edge wear, surface variation, and mossiness. From there, I identified key parameters like age, erosion, and overgrowth to control how the material transitions from newly paved to heavily weathered.`,
    header: "Material Analysis",
    image: "/images/Cobblestone/reference.jpg"
  },
   {
    desc: `The material is built entirely in Maya’s Hypershade using procedural nodes, avoiding any reliance on texture maps. I layered noise functions, masks, and displacement to generate natural stone breakup, height variation, and irregularity in a clean, modular graph.`,
    header: "Shader Development: Procedural Graph",
    image: "/images/Cobblestone/graph.png"
  },
  {
    desc: `I exposed a set of intuitive controls that allow the material to be adjusted in real time. Parameters such as stone shape, moss coverage, dirt accumulation, and brightness make it easy to iterate across a wide range of visual styles.`,
    header: "Control System",
    image: "/images/Cobblestone/sliders.png"
  },
  {
    header: "Application + Output",
    desc: `The shader was applied across multiple geometries, including subdivided planes and cubes, with consistent results. It adapts cleanly to different surfaces, demonstrating flexibility for both environment assets and modular level design.`,
    image: "/images/Cobblestone/outputs.png"
  },
]

export default info;