interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Storyboarding`,
    desc: "Polished the manuscript and led storyboarding process to solidify visual guide before animating and asset creation",
    image: "/images/Bear/storyboard.png"
  },
  {
    header: `Hero Character Creation`,
    desc: "Designed, modeled, textured, and rigged Bear, the main character of the short",
    image: "/images/Bear/bear.png"
  },
  {
    header: `Animation`,
    desc: "Worked alongside 5 other students to animate, refine, and edit, and composite animated short to showcase public at Brown University",
    image: ""
  },
]

export default info;