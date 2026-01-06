"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "Expense-tracking app using the MERN stack. The app includes user authentication with JWT, income and expense tracking, interactive charts, and the ability to export data in Excel format.",
    image: "images/projects/smart_spend_login.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Embox99/smart_spend",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Flower Shop Website",
    description:
      "A modern flower shop built with TypeScript, Tailwind CSS, and Next.js, offering a seamless shopping experience.",
    image: "images/projects/flower-shop-slung.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Embox99/flower_shop",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Barbershop Website",
    description:
      "A modern full-stack barbershop booking system featuring smart real-time scheduling, SMS authentication, and a comprehensive admin dashboard built with React, Node.js, and PostgreSQL.",
    image: "images/projects/screenshot-hp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Embox99/barbershop-booking-system",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Chat and Video Calling App",
    description:
      "A real-time language exchange platform featuring video calls, screen sharing, and interactive chat. Built with the MERN stack, leveraging Stream SDK, Zustand, and TanStack Query for optimal performance.",
    image: "images/projects/lingo-screenshot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Embox99/lingo-video-calls",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Dual N Back Game",
    description:
      "A customizable Dual N-Back brain trainer built with Next.js and TypeScript, featuring adjustable N-levels, Web Speech API audio, and detailed accuracy statistics.",
    image: "images/projects/dual-n-back-main.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Embox99/dual_n_back",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Book Platform",
    description: "Discover, track, and organize your reading journey",
    image: "images/projects/book-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Embox99/book-finder-frontend",
    previewUrl: "",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
