interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Storyboarding`,
    desc: "I polished the manuscript and led the storyboarding process to solidify a scene-by-scene visual guide before animating and asset creation.",
    image: "/images/Bear/storyboard.png"
  },
  {
    header: `Hero Character Creation`,
    desc: "I designed, modeled, textured, and fully rigged 'Bear', the short's main character. Bear has a bipedal rig which can also support quadripedal movement, as well as blendshape facial expressions.",
    image: "/images/Bear/bear.png"
  },
  {
    header: `Animation`,
    desc: "I worked alongside 5 other students to animate, refine, and edit, and composite the animated short. We showcased our work to the public at Brown University.",
    image: ""
  },
]

export default info;