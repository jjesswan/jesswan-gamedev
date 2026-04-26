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
    desc: "The prosthetic hand uses a segmented hierarchy, with each piece parented to it’s respective ball joint to create mechanical-like motion.",
    image: "/images/Xiang/hand_demo.gif"
  },
  {
    header: `Control Systems`,
    desc: "To animate the rig, I exposed controls that make complex transitions simple to manage. I developed a walk cycle grounded in the character’s weight and posture.",
    image: "/images/Xiang/walk.gif"
  },
  {
    header: `1 Hand v 2 Hand Animation`,
    desc: "A custom slider blends between one-handed and two-handed staff grips, dynamically adjusting position and orientation of the weapon without breaking animation flow.",
    image: "/images/Xiang/2hand.png"
  },
  {
    header: `Attack Sequence Game Assets`,
    desc: "I built three attack animations based off Chinese martial arts, designed to chain together based on player input. From any attack pose, Xiang can easily transition back into a standing or walking state.",
    image: null
  },
]

export default info;