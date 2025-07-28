import React, { useState, useEffect } from "react";
import logo from "../assets/profile.jpg";
import Skills from "./Skills";
import Projects from "./Projects";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

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
      text: "I am vengeance, I am the night, I am Batman.",
      source: "Batman",
      anime: "Dark Knight",
    },
    {
      text: "The only ones who should kill are those prepared to be killed.",
      source: "Lelouch Lamperouge",
      anime: "Code Geass",
    },
    {
      text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
      source: "Himura Kenshin",
      anime: "Rurouni Kenshin",
    },
    {
      text: "A lesson without pain is meaningless. That's because you can't gain something without sacrificing something else.",
      source: "Edward Elric",
      anime: "Fullmetal Alchemist: Brotherhood",
    },
    {
      text: "A person grows up when he's able to overcome hardships...",
      source: "Jiraiya",
      anime: "Naruto",
    },
    {
      text: "Power comes in response to a need, not a desire.",
      source: "Goku",
      anime: "Dragon Ball Z",
    },
    {
      text: "Fear is not evil. It tells you what your weakness is.",
      source: "Gildarts Clive",
      anime: "Fairy Tail",
    },
    {
      text: "A man grows up when he learns to love something more than himself.",
      source: "Shikaku Nara",
      anime: "Naruto Shippuden",
    },
    {
      text: "You should enjoy the little detours...",
      source: "Ging Freecss",
      anime: "Hunter x Hunter",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [displayText, setDisplayText] = useState("");
  const fullText = "Hoola Amigos, Let's turn some black coffee ☕  into code";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(interval);
        return;
      }

      setDisplayText((prev) => prev + fullText.charAt(index));
      index += 1;
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8 p-4 max-w-5xl mx-auto">
      <div className="bg-white/10 text-white p-4 rounded-lg border-2 flex flex-col md:flex-row items-center md:items-start border-white/40 md:shiny-gradient shadow gap-4">
        <img
          src={logo}
          alt="Profile"
          className="w-32 h-32 md:w-48 md:h-48 border-2 rounded-2xl border-gray-500 object-cover"
        />
        <div className="  md:w-full md:h-50 md:flex md:justify-center md:items-center">
          <p className="text-3xl sm:text-5xl md:text-3xl md:ml-3 lg:text-4xl font-semibold ">
            {displayText}
            <span className="animate-blink">💻</span>
          </p>
        </div>
      </div>

      <div className="bg-white/10 text-white  p-4 rounded-lg shadow border-2 border-white/40 lg:shiny-gradient">
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl text-center w-70 text-white font-bold bg-gray-950 border-[0.5px] border-white/30 rounded-xl py-2 px-4 shadow-lg mb-2">
            About Me
          </h1>
        </div>

        <ul>
          <li className="text-2xl font-bold">
            Hi, I'm Nomesh — a curious builder and a full-stack developer
            <span className="animate-blink ml-2">!</span>
          </li>{" "}
          <li className="text-md mt-2 font-semibold">
            I love crafting sleek, high-performance apps using Nextjs, React,
            TypeScript, Express, Tailwind CSS, and React Native.
          </li>{" "}
          <li className="text-md mt-2 font-semibold">
            Whether it's web or mobile, I enjoy turning ideas into real-world
            projects that solve problems and look great doing it.
          </li>
        </ul>
      </div>

      <div className="bg-white/10 text-white p-4 border-2 border-white/40 md:shiny-gradient rounded-lg shadow">
        <Skills />
      </div>
      <Projects />

      <div className="bg-white/10 text-white p-4 rounded-lg border-2 border-white/40 md:shiny-gradient shadow">
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
            className="bg-white/20 p-2 rounded hover:bg-white/30 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white/10 text-white p-4 rounded-lg border-2 border-white/40 md:shiny-gradient shadow">
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
      </div>

      <div className="bg-white/10 border-2 border-white/40 md:shiny-gradient text-white p-4 rounded-lg shadow text-center">
        <p className="italic">"{quotes[currentQuote].text}"</p>
        <p className="text-sm text-white/70">
          - {quotes[currentQuote].source} ({quotes[currentQuote].anime})
        </p>
      </div>
    </div>
  );
};

export default Bento;
