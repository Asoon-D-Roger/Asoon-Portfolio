"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderntns from "@/components/WorkSliderntns";

const projects = [
  {
    num: "01",
    category: "Chat App",
    title: "Project 1",
    description:
      "A real-time chat application built with React.js, utilizing JavaScript, HTML, and CSS for a responsive and interactive user interface, facilitating instant communication between users.",
    stack: [
      { name: "React.Js" },
      { name: "Css 3" },
      { name: "Html 5" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/chatapplication.png",
    live: "",
    github: "https://github.com/Asoon-D-Roger/Chat-Application",
  },
  {
    num: "02",
    category: "Weather App",
    title: "Project 2",
    description:
      "The Weather App is a simple and intuitive application that allows users to get real-time weather information for any location. Built using JavaScript, HTML, and CSS, this app fetches weather data from a reliable API and displays it in a user-friendly interface.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Sass" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/weatherapp.png",
    live: "https://weatherapp-60030360180.development.catalystserverless.in/app/index.html",
    github: "https://github.com/Asoon-D-Roger/Weather-App",
  },
  {
    num: "03",
    category: "To-Do-List",
    title: "Project 3",
    description:
      "This project is a simple and intuitive To-Do List application built using HTML, CSS, and JavaScript. The application allows users to manage their daily tasks efficiently by adding, editing, marking as complete, and deleting tasks.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Sass" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/todolist.jpg",
    live: "https://to-do-list-60030360180.development.catalystserverless.in/app/index.html",
    github: "https://github.com/Asoon-D-Roger/To-Do-List",
  },
  {
    num: "04",
    category: "Slot Machine",
    title: "Project 4",
    description:
      "This project is a simple slot machine game developed using JavaScript and Node.js. It allows users to interact with a command-line interface to place bets, choose the number of lines to bet on, and see if they win based on random outcomes.",
    stack: [{ name: "JavaScript" }, { name: "Node.Js" }],
    image: "/assets/work/slotMachine.jpg",
    live: "https://github.com/Asoon-D-Roger/Slot_Machine-Game",
    github: "https://github.com/Asoon-D-Roger/Slot_Machine-Game",
  },
  {
    num: "05",
    category: "Tic-Tac-Toe",
    title: "Project 5",
    description:
      "Developed a console-based XOX (Tic-Tac-Toe) game using Python, providing a user-friendly interface for two players. Implemented game logic for detecting winning conditions, draw scenarios, and input validation to ensure a smooth and error-free gaming experience.",
    stack: [{ name: "Python" }],
    image: "/assets/work/xoxgame.png",
    live: "https://github.com/Asoon-D-Roger/XOX-Game-Tic-Tac-Toe-",
    github: "https://github.com/Asoon-D-Roger/XOX-Game-Tic-Tac-Toe-",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
          order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
              hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderntns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
              xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
              w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
