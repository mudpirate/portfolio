import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/knight2.webp";
import Skills from "./Skills";
import Projects from "./Projects";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Navbar from "./Navbar";

const Bento = ({ isMobile }) => {
  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/mudpirate",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nomesh-singh-121510328/",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      link: "https://x.com/mud_pirate__",
    },
    { icon: <FaDiscord />, label: "Discord", link: "https://discord.com/" },
    { icon: <FaFacebookF />, label: "Facebook", link: "https://facebook.com/" },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "https://instagram.com/",
    },
  ];

  const quotes = [
    {
      text: "It’s not who I am underneath, but what I do that defines me.",
      source: "Bruce Wayne",
      movie: "Batman Begins",
    },
    {
      text: "Do, or do not. There is no try.",
      source: "Yoda",
      movie: "Star Wars: The Empire Strikes Back",
    },
    {
      text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
      source: "Ferris Bueller",
      movie: "Ferris Bueller's Day Off",
    },
    {
      text: "Great men are not born great, they grow great.",
      source: "Don Vito Corleone",
      movie: "The Godfather",
    },
    {
      text: "It’s what you do right now that makes a difference.",
      source: "Black Panther (T'Challa)",
      movie: "Avengers: Endgame",
    },
    {
      text: "Why do we fall, sir? So that we can learn to pick ourselves up.",
      source: "Alfred Pennyworth",
      movie: "Batman Begins",
    },
    {
      text: "Every man dies, not every man really lives.",
      source: "William Wallace",
      movie: "Braveheart",
    },
    {
      text: "You have to do everything you can. You have to work your hardest. And if you stay positive, you have a shot at a silver lining.",
      source: "Pat Solitano",
      movie: "Silver Linings Playbook",
    },
    {
      text: "Get busy living, or get busy dying.",
      source: "Andy Dufresne",
      movie: "The Shawshank Redemption",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-8 px-8 py-5 w-[100vw] md:max-w-4xl md:mx-auto">
      <Navbar
        onScrollTo={(section) => {
          if (section === "skills")
            skillsRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "projects")
            projectRef.current?.scrollIntoView({ behavior: "smooth" });
          if (section === "contact")
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }} // starts off-screen
        animate={{ opacity: 1, x: 0 }} // slides in
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="border border-gray-400  sm:min-h-[83vh] md:border-gray-400 rounded-lg bg-white/10 md:w-full md:h-full lg:h-[65vh] md:flex md:justify-center"
      >
        {" "}
        <div className="bg-white/10 sm:h-[83vh] text-white h-[40vh] md:w-full md:h-full rounded-lg  flex flex-col md:flex-row  justify-center items-center md:items-start border-gray-400  md:shiny-gradient shadow gap-4">
          <img
            src={logo}
            alt="Profile"
            className="w-full h-full sm:h-full md:w-full md:h-full  rounded-lg  border-gray-500  md:object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 text-white min-h-[42vh] sm:min-h-full p-4 rounded-lg shadow border border-gray-400  lg:shiny-gradient"
      >
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl text-center w-70 text-white font-bold bg-gray-950 border-[0.5px] border-white/30 rounded-xl py-2 px-4 shadow-lg mb-2">
            About Me
          </h1>
        </div>

        <ul>
          <li className="text-2xl text-white ">
            Hi, I'm Nomesh — a curious builder and a full-stack developer
            <span className="animate-blink ml-2">💻</span>
          </li>{" "}
          <li className="text-md mt-2  text-gray-300">
            I love crafting sleek, high-performance apps using Nextjs, React,
            TypeScript, Express, Tailwind CSS, and React Native.
          </li>{" "}
          <li className="text-md mt-2 text-gray-300 ">
            I enjoy turning ideas into real-world projects that solve problems
            and look great doing it.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        ref={skillsRef}
        className="bg-white/10  text-white p-4 border border-gray-400  md:shiny-gradient rounded-lg shadow"
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8 }}
      >
        {" "}
        <Projects ref={projectRef} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        ref={contactRef}
        className="bg-white/10 text-white p-4 rounded-lg border border-gray-400  md:shiny-gradient shadow"
      >
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl text-center w-70 text-white font-bold bg-gray-950 border-[0.5px] border-white/30 rounded-xl py-2 px-4 shadow-lg mb-2">
            Contact Me
          </h1>
        </div>

        <form
          action="https://formspree.io/f/xldnpykv"
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 rounded bg-white/20 placeholder-white/70 focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="p-2 rounded bg-white/20 placeholder-white/70 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-white/20 w-full sm:w-90 py-2 border border-gray-400 mx-auto text-center rounded hover:bg-white/30 font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 text-white p-4 rounded-lg border border-gray-400  md:shiny-gradient shadow"
      >
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl text-center w-70 text-white font-bold bg-gray-950 border-[0.5px] border-white/30 rounded-xl py-2 px-4 shadow-lg mb-2">
            Socials
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-20"
            >
              <div className="text-3xl mb-1">{social.icon}</div>
              <span className="text-sm text-center">{social.label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <div className="bg-white/10 border border-gray-400  md:shiny-gradient text-white p-4 rounded-lg shadow text-center">
        <p className="italic">"{quotes[currentQuote].text}"</p>
        <p className="text-sm text-white/70">
          - {quotes[currentQuote].source} ({quotes[currentQuote].anime})
        </p>
      </div>
      <div className="  md:hidden text-white p-4 rounded-lg shadow text-center">
        <p className=""> Made With 🖤 By Nomesh</p>
      </div>
    </div>
  );
};

export default Bento;
