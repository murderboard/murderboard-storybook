import React from "react";
import { ProjectCard } from "./ProjectCard";

export default {
  title: "MainApp/ProjectCard",
  component: ProjectCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
  args: {
    title: "Project Phoenix",
    description:
      "A next-gen cloud infrastructure migration project with CI/CD integration.",
    updatedAt: "2 days ago",
    teamMembers: [
      "https://i.pravatar.cc/32?img=1",
      "https://i.pravatar.cc/32?img=2",
      "https://i.pravatar.cc/32?img=3",
    ],
    initials: "PR",
  },
};

export const Default = {};
