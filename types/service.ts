import type { IconName } from "@/lib/icons";

export interface Service {
  title: string;
  description: string;

  icon: IconName;

  href?: string;

  featured?: boolean;
}