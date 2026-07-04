import {
  BadgePlus,
  ShieldCheck,
  Smile,
  Sparkles,
  Heart,
  Stethoscope,
} from "lucide-react";

export const icons = {
  "badge-plus": BadgePlus,
  "shield-check": ShieldCheck,
  smile: Smile,
  sparkles: Sparkles,
  heart: Heart,
  stethoscope: Stethoscope,
};

export type IconName = keyof typeof icons;