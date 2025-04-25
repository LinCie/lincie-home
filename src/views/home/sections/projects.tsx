"use client";

/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import mika from "@/assets/mika.png";
import link from "@/assets/link.png";
import haebot from "@/assets/haebot.png";
import nerpai from "@/assets/nerpai.png";
import lincie from "@/assets/lincie.png";

interface IProject {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  stacks: {
    name: string;
    icon: string;
  }[];
}

const projects: IProject[] = [
  {
    image: lincie,
    title: "LinCie",
    description: "My own personal website",
    link: "https://lincie.me/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    image: mika,
    title: "Mika",
    description: "A simple discord music bot",
    link: "https://mika.lincie.me/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Bun",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
      },
      {
        name: "DiscordJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    image: link,
    title: "Link",
    description: "A personal linktree-like page",
    link: "https://link.lincie.me/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Astro",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    image: haebot,
    title: "PT Haebot Teknologi Indonesia's Landing Page",
    description: "A professional landing page",
    link: "https://www.haebot.com/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    image: nerpai,
    title: "bodo/nerpai",
    description: "A fully featured ERP web application",
    link: "https://www.nerpai.space/",
    stacks: [
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
];

function ProjectCard({ project, index }: { project: IProject; index: number }) {
  return (
    <motion.div
      className="group relative h-max w-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.05,
      }}
    >
      <div className="absolute top-3 left-3 h-full w-full rounded-2xl bg-white/5 shadow-md backdrop-blur-md transition-all group-hover:top-2 group-hover:left-2" />
      <Link
        href={project.link}
        target="_blank"
        className="relative top-0 left-0 z-10 flex h-full w-full cursor-pointer flex-col gap-2 rounded-2xl bg-[#3b4252] p-2 transition-all md:flex-row md:gap-4 md:p-4"
      >
        <Image
          src={project.image}
          alt=""
          aria-hidden
          loading="lazy"
          className="w-full rounded-2xl md:w-72"
        />
        <div className="flex w-full flex-col space-y-1">
          <h3 className="text-sm font-semibold md:text-base">
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed md:text-sm">
            {project.description}
          </p>
          <div className="grow"></div>
          <div className="flex">
            <div className="flex grow flex-wrap items-center gap-2">
              {project.stacks.map((stack) => (
                <img
                  key={`${project.title} ${stack.name}`}
                  src={stack.icon}
                  alt={stack.name}
                  className="size-5"
                />
              ))}
            </div>
            <FaArrowRight
              aria-hidden
              className="shrink-0 place-self-end opacity-0 transition-all group-hover:opacity-100"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function HomeProjectsSection() {
  return (
    <section className="flex flex-col gap-4 md:gap-3">
      <motion.h2
        className="text-lg font-bold md:text-xl"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        🖥️ Projects Highlight
      </motion.h2>
      <div className="space-y-6 px-2 md:px-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default HomeProjectsSection;
