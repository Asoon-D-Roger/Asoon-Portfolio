"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 91506 43920",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "asoonsubbarayana@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "365, ThamiraBharani sq,Thanthai Periyar nagar,Salemedu,Villupuram. 605401 - Tamil Nadu, India.",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6 p-5  bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                "I'm excited to collaborate with you! Please fill out the form
                below to tell me more 'bout your project. I'll
                get back to you as soon as possible."
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="hidden" name="access_key" value="81b4589c-c3e3-4d70-9ccb-3dac0bb0f3c0" />
                <Input type="firstname" name="first_name" placeholder="Firstname" />
                <Input type="lastname" name="last_name" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue  action="https://api.web3forms.com/submit" method="POST" placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Front-End Development</SelectItem>
                    <SelectItem value="cst">Back-End Development</SelectItem>
                    <SelectItem value="mst">Database</SelectItem>
                    <SelectItem value="nst">Version Control</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              {/* Services */}
              <div className="grid grid-cols-1 gap-6">
                <Input type="service" name="service" placeholder="Service" />
              </div>

              {/* text area */}
              <Textarea
                className="h-[130px]"
                type="text"
                name="textarea"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Send Mail
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
