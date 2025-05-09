import React from "react";
import { MurderBoard } from "./MurderBoard";

export default {
  title: "MainApp/MurderBoard",
  component: MurderBoard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

const victim = {
  title: "Dr. Sarah Mitchell",
  description: "Chief of Surgery at Memorial Hospital. Found dead in the hospital storage room. Cause of death: blunt force trauma.",
  updatedAt: "Time of death: 2:15 AM",
  initials: "SM",
  avatarImage: "/assets/victim.jpg",
  borderTopColor: "red-500",
  listItems: [
    {
      label: "Last Seen",
      values: ["Hospital Storage Room"]
    },
    {
      label: "Cause of Death",
      values: ["Blunt Force Trauma"]
    },
    {
      label: "Time of Death",
      values: ["2:15 AM"]
    }
  ],
};

const suspects = [
  {
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
      }
    ],
  },
  {
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
        label: "Motive",
        values: ["Professional conflict", "Budget disputes"]
      }
    ],
  }
];

const clues = [
  {
    title: "Bloody Gloves",
    description: "Found in the storage room trash bin. Size: Medium. Brand: MedPro.",
    updatedAt: "Found: 2:30 AM",
    initials: "BG",
    borderTopColor: "blue-500",
    listItems: [
      {
        label: "Location",
        values: ["Storage Room Trash Bin"]
      },
      {
        label: "Size",
        values: ["Medium"]
      },
      {
        label: "Brand",
        values: ["MedPro"]
      }
    ],
  },
  {
    title: "Broken IV Stand",
    description: "Possible murder weapon. Found near the victim's body. Blood stains on the base.",
    updatedAt: "Found: 2:15 AM",
    initials: "IS",
    borderTopColor: "blue-500",
    listItems: [
      {
        label: "Condition",
        values: ["Broken", "Blood Stained"]
      },
      {
        label: "Location",
        values: ["Near Victim's Body"]
      }
    ],
  }
];

const photos = [
  {
    title: "Storage Room Overview",
    description: "Initial crime scene photo showing the disarray of medical supplies.",
    updatedAt: "Taken: 2:20 AM",
    initials: "SO",
    avatarImage: "/assets/crimescene1.jpg",
    borderTopColor: "orange-500",
    listItems: [
      {
        label: "Photographer",
        values: ["Detective Johnson"]
      },
      {
        label: "Location",
        values: ["Storage Room"]
      }
    ],
  },
  {
    title: "Victim's Car",
    description: "Victim's car found in the hospital parking garage, showing signs of struggle.",
    updatedAt: "Taken: 7:30 AM",
    initials: "VC",
    avatarImage: "/assets/crimescene2.jpg",
    borderTopColor: "orange-500",
    listItems: [
      {
        label: "Location",
        values: ["Parking Garage B2"]
      },
      {
        label: "Condition",
        values: ["Signs of Struggle"]
      }
    ],
  }
];

const crimeScenes = [
  {
    title: "Hospital Storage Room",
    description: "The victim was found in the hospital's medical supply storage room. The room was in disarray, with medical supplies scattered across the floor.",
    updatedAt: "Discovered: 2:15 AM",
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
      }
    ],
  },
  {
    title: "Hospital Parking Garage",
    description: "The victim's car was found in the hospital parking garage, Level B2. The vehicle's interior showed signs of a struggle.",
    updatedAt: "Discovered: 7:30 AM",
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
        values: ["Blood stains", "Damaged seatbelt", "Partial fingerprint"]
      }
    ],
  }
];

export const Default = {
  args: {
    victim,
    suspects,
    clues,
    photos,
    crimeScenes,
  },
}; 