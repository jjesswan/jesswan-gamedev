interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Core Concept`,
    desc: "The game follows a lone astronaut navigating a post-apocalyptic world, tasked with restoring life by protecting the last surviving plant. Exploration is tied to environmental conditions, creating a world that feels both hostile yet gradually recoverable.",
    image: "/images/OriginTwo/env2.jpg"
  },
  {
    header: `Physics + Collision System`,
    desc: "The physics system handles multiple collider types, including circles, axis-aligned boxes, and convex polygons, allowing for flexible interaction with each other. Collisions are resolved using minimal translation vectors for separation, as well as impulse-based responses to simulate real-life momentum and restitution.",
    image: ""
  },
  {
    header: `Environmental Systems: Oxygen + Radiation`,
    desc: "Regions vary in oxygen and radiation levels, directly affecting player movement and survivability. Players can restore safe zones by spreading plant spores, turning previously hostile areas into navigable spaces and reinforcing game progression through environmental change.",
    image: ""
  },
  {
    header: `Inventory System`,
    desc: "An inventory system supports item collection and resource management. Interactions with the environment and objects are integrated with the engine’s physics and state systems.",
    image: "/images/OriginTwo/inventory.gif"
  },

  {
    header: `Narrative System`,
    desc: "The dialogue system allows players to make decisions that influence narrative flow and interactions. Branching paths create variability in how the story unfolds, reinforcing player agency within the world.",
    image: ""
  },
  {
    header: `Visuals + Audio`,
    desc: "Custom sprites and environment assets establish the tone of a decaying but revivable world. Open source sfx are integrated to reinforce player actions and environmental feedback, enhancing immersion.",
    image: "/images/OriginTwo/env1.jpg"
  },
]

export default info;