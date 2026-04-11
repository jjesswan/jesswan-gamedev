interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Engine Architecture: ECS`,
    desc: "The engine is built on an entity-component system that separates data and behavior into modular components. This allows game objects to be assembled flexibly, with systems like rendering, physics, and AI operating independently but cohesively.",
    image: ""
  },
   {
    header: `Physics + Collision System`,
    desc: "Collision handling supports both primitive and triangle mesh geometry, enabling accurate interaction with complex environments. I combined bounding volume hierarchies for static geometry with grid-based partitioning for dynamic objects to maintain performance in real-time scenarios.",
    image: ""
  },
   {
    header: `AI + Pathfinding`,
    desc: "AI-driven entities use the A* algorithm to navigate the environment efficiently. The system dynamically evaluates available paths, allowing agents to respond to spatial constraints and reach targets reliably.",
    image: ""
  },
   {
    header: `Camera + Movement Systems`,
    desc: "I implemented multiple camera modes, including first-person, third-person, and orbital views, to support different gameplay perspectives. These systems integrate directly with player movement, maintaining smooth transitions and spatial awareness.",
    image: "/images/NinjaMouse/arcball.gif"
  },
   {
    header: `Environment Systems`,
    desc: "The environment includes a skybox, animated grass, and water systems that bring the world to life. These elements are designed to work cohesively with the engine’s rendering and physics systems while maintaining real-time performance.",
    image: "/images/NinjaMouse/scenery.gif"
  },
]

export default info;