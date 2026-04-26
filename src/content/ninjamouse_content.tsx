interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Engine Architecture: ECS`,
    desc: "The engine is built on an entity-component system that separates data and behavior into modular components. This allows game objects to be assembled with quickness and flexibility. Such systems include rendering, physics, transformations, collision, and AI.",
    image: ""
  },
   {
    header: `Physics + Collision System`,
    desc: "Collision handling supports both primitive geometry and triangle-mesh OBJs, enabling accurate interaction with complex environments. To optimize collision-detection performance, I combined bounding volume hierarchies (BVH) for static objects and grid-based partitioning for dynamic objects.",
    image: ""
  },
   {
    header: `AI + Pathfinding`,
    desc: "AI-driven entities use the A* (or A-star) algorithm to navigate the environment efficiently. The AI system dynamically evaluates available paths, allowing agents to respond to spatial constraints and reliably reach their intended target.",
    image: ""
  },
   {
    header: `Camera + Movement Systems`,
    desc: "I implemented multiple camera modes, including first-person, third-person, and orbital views, to support different gameplay perspectives. These systems integrate directly with player movement.",
    image: "/images/NinjaMouse/arcball.gif"
  },
   {
    header: `Environment Systems`,
    desc: "The environment includes a skybox, animated grass and flora, and water systems that bring the world to life. These elements are primarily implemented through custom shaders, which help liven the world while maintaining real-time performance.",
    image: "/images/NinjaMouse/scenery.gif"
  },
]

export default info;