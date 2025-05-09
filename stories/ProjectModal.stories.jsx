import React from "react";
import { ProjectModal } from "./ProjectModal";

export default {
  title: "MainApp/ProjectModal",
  component: ProjectModal,
  tags: ["autodocs"],
  parameters: {
    // layout: "fullscreen",
  },
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
};

export const Default = {
  args: {
    title: "Project Phoenix",
    description:
      "A next-gen cloud infrastructure migration project with CI/CD integration.",
    updatedAt: "2 days ago",
    initials: "PR",
    avatarImage: "/assets/suspect1.jpg",
    borderTopColor: "blue-500",
    listItems: [
      {
        label: "Design Tools",
        values: ["Figma", "Sketch", "Adobe XD"]
      },
      {
        label: "Technologies",
        values: ["React", "TypeScript", "Tailwind"]
      }
    ],
  },
};

export const SuspectOne = {
  args: {
    ...Default.args,
    title: "James Wilson",
    description: "Former hospital orderly who worked the night shift. Was recently fired for suspicious behavior around the victim's ward.",
    updatedAt: "Last seen: 3 days ago",
    initials: "JW",
    avatarImage: "/assets/suspect1.jpg",
    borderTopColor: "red-500",
    listItems: [
      {
        label: "Occupation",
        values: ["Hospital Orderly"]
      },
      {
        label: "Alibi",
        values: ["None provided"]
      },
      {
        label: "Criminal Record",
        values: ["None"]
      },
      {
        label: "Last Known Location",
        values: ["Hospital Staff Room"]
      }
    ],
  },
};

export const SuspectTwo = {
  args: {
    ...Default.args,
    title: "Sarah Chen",
    description: "Hospital administrator who had frequent conflicts with the victim over budget allocations. Was seen arguing with the victim hours before the incident.",
    updatedAt: "Last seen: 1 day ago",
    initials: "SC",
    avatarImage: "/assets/suspect2.jpg",
    borderTopColor: "red-500",
    listItems: [
      {
        label: "Occupation",
        values: ["Hospital Administrator"]
      },
      {
        label: "Alibi",
        values: ["Claims to be at home", "No witnesses"]
      },
      {
        label: "Criminal Record",
        values: ["None"]
      },
      {
        label: "Motive",
        values: ["Professional conflict", "Budget disputes"]
      }
    ],
  },
};

export const CrimeSceneOne = {
  args: {
    ...Default.args,
    title: "Hospital Storage Room",
    description: "The victim was found in the hospital's medical supply storage room. The room was in disarray, with medical supplies scattered across the floor. A broken IV stand was found near the body, possibly used as the murder weapon.",
    updatedAt: "Discovered: 2 days ago",
    initials: "HS",
    avatarImage: "/assets/crimescene1.jpg",
    borderTopColor: "orange-500",
    listItems: [
      {
        label: "Time of Discovery",
        values: ["2:15 AM"]
      },
      {
        label: "Evidence Found",
        values: ["Broken IV stand", "Bloody medical gloves", "Disturbed supply shelves"]
      },
      {
        label: "Access Points",
        values: ["Main door", "Emergency exit"]
      },
      {
        label: "Security Cameras",
        values: ["Camera malfunction", "Last 30 minutes missing"]
      }
    ],
  },
};

export const CrimeSceneTwo = {
  args: {
    ...Default.args,
    title: "Hospital Parking Garage",
    description: "The victim's car was found in the hospital parking garage, Level B2. The vehicle's interior showed signs of a struggle, with the driver's seat reclined and the seatbelt mechanism damaged. Blood stains were found on the passenger side door handle.",
    updatedAt: "Discovered: 1 day ago",
    initials: "PG",
    avatarImage: "/assets/crimescene2.jpg",
    borderTopColor: "orange-500",
    listItems: [
      {
        label: "Time of Discovery",
        values: ["7:30 AM"]
      },
      {
        label: "Evidence Found",
        values: ["Blood stains", "Damaged seatbelt", "Partial fingerprint on door handle"]
      },
      {
        label: "Vehicle Condition",
        values: ["Engine cold", "Keys in ignition", "Passenger door ajar"]
      },
      {
        label: "Security Coverage",
        values: ["Blind spot in camera coverage", "Poor lighting in area"]
      }
    ],
  },
}; 