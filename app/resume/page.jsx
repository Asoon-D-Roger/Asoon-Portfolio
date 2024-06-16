"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaPython,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMongodb,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Aspiring Python Full-Stack Developer eager to kickstart a career in web development. Proficient in Python programming language and enthusiastic about learning front-end and back-end technologies to build robust web applications. Solid understanding of HTML, CSS, and JavaScript, with a keen interest in frameworks like Django and MongoDB for back-end development and Bootstrap and SASS for front-end development. Strong problem-solving skills, coupled with a passion for coding and a drive to continuously enhance skills. Ready to contribute positively to dynamic development teams and excited to take on new challenges in the field of software engineering.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Asoon Subbarayan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 91506 43920",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Skype",
      fieldValue: "Asoon",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Mail",
      fieldValue: "asoonsubbarayana@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "Tamil, English, Telugu",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Front-End Innovator | Bridging Back-End Logic with Front-End Design.",
  items: [
    {
      company: "Ocean Academy",
      position: "Full-Stack Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Code Clash '24 held by Ocean Academy",
      position: "Qualified as a Finalist",
      duration: "May 10, 2024",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Here's my Qualification details.",
  items: [
    {
      institution: "Ocean Academy",
      degree: "Python Full-Stack Development",
      duration: "2023 - 2024",
    },
    {
      institution: "Bharathidasan University",
      degree: "B.Sc in Computer Science",
      duration: "2023 - Present",
    },
    {
      institution: "Dr. Ambedkar Global Law Institute",
      degree: "BA,LLB(HONS)",
      duration: "2016 - 2021",
    },
    {
      institution: "Maruthi Hr Sec School",
      degree: "HSC ( 12th )",
      duration: "2015 - 2016",
    },
    {
      institution: "Maruthi Hr Sec School",
      degree: "SSLC ( 10th )",
      duration: "2013 - 2014",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Versatile Python Full-Stack Developer proficient in Django, React, and cloud services, with a proven ability to deliver robust, scalable web applications and optimize performance.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap framework",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
    // {
    //   icon: <FaGit />,
    //   name: "Git",
    // },
    // {
    //   icon: <FaGithub />,
    //   name: "GitHub",
    // },
    {
      icon: <FaNodeJs />,
      name: "Did a project with node.jS",
    },
    {
      icon: <FaReact />,
      name: "Built my Portfolio with react.js",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiTailwindcss />,
      name: "Built my Portfolio with Tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Built my Portfolio with next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl 
                                        flex justify-center items-center"
                            >
                              <div className="text-6xl hover:text-cyan-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
