import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/bat.webp";
import Skills from "./Skills";
import Projects from "./Projects";
import { motion } from "framer-motion";
import float from "../assets/images/float2.webp";
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
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
      <div className="    px-2 py-4  xl:px-30 xl:py-5">
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
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="min-h-[20vh] xl:h-[84vh] mt-5 w-full md:h-[70vh] mb-5   border border-gray-400 rounded-lg bg-white/10 flex justify-center items-center"
        >
          <img
            src={logo}
            alt="Profile"
            className="w-full h-full xl:h-[83vh] object-cover object-top rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white/10 w-full  mb-5  px-4 text-white p-4 rounded-lg border border-gray-400 shadow"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-xl sm:text-2xl font-bold w-70 text-center bg-gray-950 border border-white/30 rounded-xl py-2 px-4 shadow-lg">
              About Me
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-lg sm:text-xl font-bold">
              Hi, I'm Nomesh — a curious builder and full-stack developer
            </p>
            <span className="animate-blink hidden md:block">
              <img src={float} alt="" className="w-10 h-10" />
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-gray-300 font-semibold text-sm sm:text-base">
            <li>
              I build apps with Next.js, React, TypeScript, Express, Tailwind
              CSS, and React Native.
            </li>
            <li>I love solving problems and creating great UI/UX.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          ref={skillsRef}
          className="bg-white/10 w-full   mb-5 px-4 text-white p-4 border border-gray-400 rounded-lg shadow"
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-5 w-full  "
        >
          <Projects ref={projectRef} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          ref={contactRef}
          className="bg-white/10 w-full  mb-5 px-4 text-white p-4 rounded-lg border border-gray-400 shadow"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl text-center w-70 font-bold bg-gray-950 border border-white/30 rounded-xl py-2 px-4 shadow-lg">
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
              className="bg-white/20 w-full py-2 border border-gray-400 text-center rounded hover:bg-white/30 font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white/10 w-full mb-5  px-4 text-white p-4 rounded-lg border border-gray-400 shadow"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl text-center w-70 font-bold bg-gray-950 border border-white/30 rounded-xl py-2 px-4 shadow-lg">
              Socials
            </h1>
          </div>
          <div className="flex flex-wrap  justify-center gap-4">
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

        <div className="bg-white/10  border w-full mb-5  px-4 border-gray-400 text-white p-4 rounded-lg shadow text-center">
          <p className="italic">"{quotes[currentQuote].text}"</p>
          <p className="text-sm text-white/70">
            - {quotes[currentQuote].source} ({quotes[currentQuote].movie})
          </p>
        </div>

        <div className="text-white  mx-auto px-4 text-center p-4">
          <p>Made with ❤️ by Nomesh</p>
        </div>
      </div>
    </div>
  );
};

export default Bento;
