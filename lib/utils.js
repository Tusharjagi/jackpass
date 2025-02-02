import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const eventCommunities = [
  { id: 1, name: "Tech Enthusiasts", category: "Technology" },
  { id: 2, name: "Startup Founders", category: "Business" },
  { id: 3, name: "Music Lovers", category: "Entertainment" },
  { id: 4, name: "Photography Club", category: "Art & Media" },
  { id: 5, name: "Gaming Community", category: "Gaming" },
  { id: 6, name: "Travel Buddies", category: "Travel" },
  { id: 7, name: "Fitness Freaks", category: "Health & Fitness" },
  { id: 8, name: "Foodies United", category: "Food & Drinks" },
  { id: 9, name: "Book Club", category: "Literature" },
  { id: 10, name: "Film Makers", category: "Film & Media" },
];
