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

export const customDateFormate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${dayName}, ${day} ${monthName} at ${hours}:${minutes} ${ampm}`;
};
