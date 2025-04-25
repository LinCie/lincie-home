"use client";

/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import mika from "@/assets/mika.png";
import link from "@/assets/link.png";
import haebot from "@/assets/haebot.png";
import nerpai from "@/assets/nerpai.png";
import lincie from "@/assets/lincie.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";

interface IProject {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  stacks: {
    name: string;
    icon: string;
    link: string;
  }[];
}

const projects: IProject[] = [
  {
    image: lincie,
    title: "LinCie (Main Dev)",
    description:
      "My own personal website, made with NextJS, styled with Tailwind CSS, and animated with Motion.",
    link: "https://lincie.me/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
        link: "https://motion.dev/",
      },
    ],
  },
  {
    image: mika,
    title: "Mika (Main Dev)",
    description:
      "A simple discord music bot made with DiscordJS and Lavalink using Shoukaku client.",
    link: "https://mika.lincie.me/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Bun",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
        link: "https://bun.sh/",
      },
      {
        name: "DiscordJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg",
        link: "https://discord.js.org/",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        link: "https://www.prisma.io/",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
        link: "https://www.sqlite.org/",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    image: link,
    title: "Link (Main Dev)",
    description: "A simple personal linktree-like page made with Astro.",
    link: "https://link.lincie.me/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Astro",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
        link: "https://astro.build/",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    image: haebot,
    title: "PT Haebot Teknologi Indonesia's Landing Page (Main Dev)",
    description:
      "A professional landing page made with NextJS, and styled with Tailwind CSS and Shadcn.",
    link: "https://www.haebot.com/",
    stacks: [
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    image: nerpai,
    title: "bodo/nerpai (Supporting Dev)",
    description:
      "A fully featured ERP web application using Laravel as the backend and Blade as the frontend, styled with Tailwind CSS",
    link: "https://www.nerpai.space/",
    stacks: [
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        link: "https://www.php.net/",
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        link: "https://laravel.com/",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        link: "https://www.mysql.com/",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        link: "https://tailwindcss.com/",
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
      <div className="absolute top-3 left-3 h-full w-full rounded-xl bg-white/5 shadow-md backdrop-blur-md transition-all group-hover:top-2 group-hover:left-2 md:rounded-2xl" />
      <div className="bg-background-2 relative top-0 left-0 z-10 flex h-full w-full flex-col gap-2 rounded-xl p-3 transition-all md:flex-row md:gap-4 md:rounded-2xl">
        <div className="w-full md:w-128">
          <Image
            src={project.image}
            alt=""
            aria-hidden
            loading="lazy"
            className="w-full rounded-xl md:rounded-2xl"
          />
        </div>
        <div className="flex w-full flex-col space-y-1">
          <Link
            href={project.link}
            target="_blank"
            className="w-fit text-sm font-semibold hover:underline md:text-base"
          >
            {project.title}
          </Link>
          <p className="text-xs leading-relaxed md:text-sm">
            {project.description}
          </p>
          <div className="grow"></div>
          <div className="flex">
            <div className="flex grow flex-wrap items-center gap-1">
              {project.stacks.map((stack) => (
                <TooltipProvider key={`${project.title} ${stack.name}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={stack.link}
                        target="_blank"
                        aria-label={stack.name}
                      >
                        <img
                          src={stack.icon}
                          alt={stack.name}
                          className="size-6 rounded-full p-0.5 hover:bg-white/10 md:size-7 md:p-1"
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{stack.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      </div>
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
