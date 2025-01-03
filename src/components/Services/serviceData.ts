import {
  PaintBucket,
  Sofa,
  Lightbulb,
  Ruler,
  Palette,
  Leaf,
  Camera,
  Coffee,
} from "lucide-react";

export const services = [
  {
    icon: PaintBucket,
    title: "Color Magic",
    description:
      "Vibe-perfect color schemes that make your space pop on social media.",
    tag: "Trending",
  },
  {
    icon: Sofa,
    title: "Furniture Goals",
    description: "Aesthetic pieces that are both Insta-worthy and super comfy.",
    tag: "Popular",
  },
  {
    icon: Lightbulb,
    title: "Mood Lighting",
    description: "Perfect lighting setups for those TikTok-ready room tours.",
    tag: "Essential",
  },
  {
    icon: Ruler,
    title: "Space Vibes",
    description: "Maximize your space with layouts that just make sense.",
    tag: "Must-Have",
  },
  {
    icon: Palette,
    title: "Aesthetic Design",
    description: "Create spaces that are totally Pinterest-worthy.",
    tag: "New",
  },
  {
    icon: Leaf,
    title: "Green Touch",
    description: "Add life to your space with perfectly placed plants.",
    tag: "Eco",
  },
  {
    icon: Camera,
    title: "Photo Spots",
    description: "Design with Instagram-worthy corners in mind.",
    tag: "Social",
  },
  {
    icon: Coffee,
    title: "Lifestyle Spaces",
    description: "Create spaces that match your daily aesthetic.",
    tag: "Lifestyle",
  },
] as const;
