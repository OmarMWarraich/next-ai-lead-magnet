import { clsx, type ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugifyLeadMagnet(title: string) {
  return slugify(title, {
    replacement: "-",
    strict: false,
    lower: true,
    trim: false,
  });
}
