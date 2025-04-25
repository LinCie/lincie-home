"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "motion/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaSteam,
  FaXTwitter,
} from "react-icons/fa6";

import me from "@/assets/me.png";

interface ISocial {
  alt: string;
  href: string;
  icon: React.ReactElement;
}

const socials: ISocial[] = [
  {
    alt: "GitHub",
    href: "https://github.com/LinCie",
    icon: <FaGithub aria-hidden />,
  },
  {
    alt: "Linkedin",
    href: "https://linkedin.com/in/lincie",
    icon: <FaLinkedinIn aria-hidden />,
  },
  {
    alt: "Instagram",
    href: "https://www.instagram.com/lincie.me",
    icon: <FaInstagram aria-hidden />,
  },
  {
    alt: "Twitter",
    href: "https://x.com/Ke_Lin_Cie",
    icon: <FaXTwitter aria-hidden />,
  },
  {
    alt: "Spotify",
    href: "https://open.spotify.com/user/31oyxnawj25zik4xbwog3emhjsmi",
    icon: <FaSpotify aria-hidden />,
  },
  {
    alt: "Steam",
    href: "https://steamcommunity.com/id/LinCie",
    icon: <FaSteam aria-hidden />,
  },
];

function HomeHeroSection() {
  const titleControl = useAnimation();
  const subtitleControl = useAnimation();
  const imageControl = useAnimation();

  const MotionImage = motion.create(Image);
  const MotionLink = motion.create(Link);

  useEffect(() => {
    const baseDelay = 0.1;
    const duration = 0.6;

    async function animations() {
      await Promise.all([
        titleControl.start({
          opacity: 1,
          x: 0,
          transition: {
            duration,
            delay: baseDelay * 0,
            ease: "easeOut",
            type: "tween",
          },
        }),
        subtitleControl.start({
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay: baseDelay * 1,
            ease: "easeOut",
            type: "tween",
          },
        }),
        imageControl.start({
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay: baseDelay * 2,
            ease: "easeOut",
            type: "tween",
          },
        }),
      ]);
    }

    animations();
  });

  return (
    <section className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start md:justify-between md:gap-3">
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={titleControl}
          className="text-lg font-bold md:text-xl"
        >
          🌥️ I&apos;m LinCie
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={subtitleControl}
          className="text-sm leading-relaxed"
        >
          A marketing undergrad and self-taught developer from Indonesia. With
          nearly 2 years of programming experience, I&apos;ve built websites, a
          Discord bot, a mobile app, and several APIs for personal and friend
          projects. My biggest strength is TypeScript, with a few experience in
          C, Python, PHP, SQL, and a little bit of Dart.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={subtitleControl}
          className="text-sm leading-relaxed"
        >
          I&apos;m a game addict, mainly playing Rhythm, RPG and RTS games.
          I&apos;m also a huge anime fan, especially Iyashikei and CGDCT genre.
          I&apos;ve been exposed to the digital world ever since I was three,
          making me well versed about the goods, and the bads of the internet.
        </motion.p>
      </div>
      <div className="flex shrink-0 flex-col items-center justify-center gap-2">
        <MotionImage
          src={me}
          alt=""
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={imageControl}
          className="h-auto w-40 rounded-2xl shadow-lg md:w-36"
        />
        <div className="flex w-40 flex-wrap justify-center gap-1 md:w-36">
          {socials.map((social, index) => (
            <MotionLink
              key={`hero-social-${social.alt}`}
              href={social.href}
              target="_blank"
              aria-label={social.alt}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-full p-1 hover:bg-white/10 [&_svg]:size-5"
            >
              {social.icon}
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
