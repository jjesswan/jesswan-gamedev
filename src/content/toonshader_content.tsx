interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

const info: WorkProps[] = [
  {
    header: `Development Process`,
    desc: "The toon shader is a material function which any shader can call to apply toon shading. It uses a custom lighting model to calculate rim lighting and shadow bands, with parameters for controlling color, brightness, and edge sharpness.",
    image: "/images/ToonShader/steps.gif"
  },
  {
    header: `Shadow + Highlight Banding`,
    desc: "Uses light direction from level blueprint during runtime to calculate the angle between the surface normal and light source. This angle is fed into multiple value bins (i.e. shadow, midtones, highlight), which can be adjusted to determine where intermediate values fall.",
    image: "/images/ToonShader/binning.png"
  },
  {
    header: `Rim Lighting`,
    desc: "Creates alpha mask with transition falloff between hard shadow and hard light, with parameters to control rim width and softness",
    image: "/images/ToonShader/rimlight.png"
  },
  {
    header: `Applying Light Models to Input Material`,
    desc: "Takes either solid color or texture input and applies the toon shading model on top, allowing it to be used across a wide range of materials. Highlight, shadow, and rim lighting color each have their own color and brightness parameter controls.",
    image: "/images/ToonShader/applying_light.png"
  },
  {
    header: `Outline Overlay Material`,
    desc: "Applies inverted hull technique to create a colored outline around the object. The outline thickness is adjustable, and the material can be toggled on or off to allow for dynamic control during gameplay.",
    image: "/images/ToonShader/demo_outline.gif"
  },
]

export default info;