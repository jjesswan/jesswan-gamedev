interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Rig Architecture`,
    desc: "I built the rig to balance control and flexibility, using a hybrid IK/FK setup that supports both precise posing and fluid motion. ",
    image: "/images/Xiang/rig.jpg"
  },
  {
    header: `Custom Prosthetic System`,
    desc: "The prosthetic hand uses a segmented hierarchy, with each piece parented to it’s respective ball joint to create mechanical motion. This setup preserves rigidity while still allowing expressive animation.",
    image: "/images/Xiang/hand_demo.gif"
  },
  {
    header: `Control Systems`,
    desc: "To animate the rig, I exposed controls that make complex transitions simple to manage. I developed a walk cycle grounded in the character’s weight and posture.",
    image: "/images/Xiang/walk.gif"
  },
  {
    header: `1 Hand v 2 Hand Animation`,
    desc: "A custom slider blends between one-handed and two-handed staff grips, dynamically adjusting position and orientation without breaking animation flow.",
    image: "/images/Xiang/model.jpg"
  },
  {
    header: `Attack Sequence Game Assets`,
    desc: "I built three attack animations designed to chain together based on player input. The attack chain allows responsive transitions, drawing from Chinese staff martial arts to maintain believable motion.",
    image: null
  },
]

export default info;