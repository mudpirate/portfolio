import React, { useState, useEffect } from "react";
import logo from "../assets/profile.jpg";
import Skills from "./Skills";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaGithub,
} from "react-icons/fa";

const Bento = ({ isMobile }) => {
  const socials = [
    {
      icon: <FaGithub className="text-3xl" />,
      label: "GitHub",
      link: "https://github.com/mudpirate",
    },
    {
      icon: <FaLinkedinIn className="text-3xl" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nomesh-singh-121510328/",
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      label: "Twitter",
      link: "https://x.com/mud_pirate__",
    },
    {
      icon: <FaDiscord className="text-3xl" />,
      label: "Discord",
      link: "https://discord.com/",
    },
    {
      icon: <FaFacebookF className="text-3xl" />,
      label: "Facebook",
      link: "https://facebook.com/",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
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
      text: "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own.",
      source: "Jiraiya",
      anime: "Naruto",
    },
    {
      text: "Power comes in response to a need, not a desire. You have to create that need.",
      source: "Goku",
      anime: "Dragon Ball Z",
    },
    {
      text: "In our society, letting others find out that you're a nice guy is a very risky move. It's extremely likely that someone would take advantage of that.",
      source: "Hitagi Senjougahara",
      anime: "Monogatari Series",
    },
    {
      text: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
      source: "Gildarts Clive",
      anime: "Fairy Tail",
    },
    {
      text: "A man grows up when he learns to love something more than himself.",
      source: "Shikaku Nara",
      anime: "Naruto Shippuden",
    },
    {
      text: "You should enjoy the little detours. Because that's where you'll find the things more important than what you want.",
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

  const gridClassName = isMobile
    ? "grid grid-cols-1 gap-4 p-4 pb-20 max-w-full min-h-screen"
    : "grid grid-cols-5 gap-4 p-4 max-w-full min-h-screen";

  return (
    <div className={gridClassName}>
      {isMobile && (
        <div className="flex   backdrop-blur-lg bg-white/10 p-3 shiny-gradient rounded-2xl justify-start gap-5 mb-4 w-full">
          <img
            src={logo}
            className="object-cover w-20 h-20 border-2 border-gray-600 rounded-2xl"
            alt="Profile"
          />
          <span className="text-white text-lg font-medium ">
            Hi, This is mudpirate here. Welcome to my portfolio website.
          </span>
        </div>
      )}
      <div
        className={`moving-border backdrop-blur-lg ${
          !isMobile ? "row-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl min-h-[200px] shiny-gradient hover:bg-white/15 transition-all duration-300`}
      >
        <Skills />
      </div>
      <div
        className={`moving-border backdrop-blur-lg ${
          !isMobile ? "col-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl p-4 min-h-[200px] shiny-gradient hover:bg-white/15 transition-all duration-300`}
      >
        <div className="mb-2 mx-2 space-y-4">
          <h1 className="text-2xl text-center text-white font-bold bg-gray-950 border-[0.5px] border-white/20 rounded-xl py-2 px-4 shadow-lg">
            About me
          </h1>
          <p className="text-white/90 font-medium rounded-xl leading-relaxed tracking-wide">
            Hi, I'm Mud Pirate(Nomesh) — a passionate and fast-learning
            full-stack developer currently pursuing a B.Tech in Information
            Technology at the University of Kalyani, West Bengal. As a
            sophomore, I've already immersed myself in the world of web
            development I'm most comfortable working with technologies like
            React, Express, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </div>
      <div
        className={`moving-border backdrop-blur-lg ${
          !isMobile ? "col-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl p-4 flex flex-col min-h-[200px] shiny-gradient hover:bg-white/15 transition-all duration-300`}
      >
        <h2 className="text-xl text-center text-white font-bold bg-gray-950 border-[0.5px] border-white/20 rounded-xl py-1.5 px-4 shadow-lg mb-3">
          Contact Me
        </h2>
        <form
          className="space-y-3 flex-1 flex flex-col justify-between "
          action="https://formspree.io/f/xldnpykv"
          method="post"
        >
          <div className="space-y-3">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border-[0.5px] border-white/20 rounded-lg p-1.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                rows="2"
                className="w-full bg-white/10 border-[0.5px] border-white/20 rounded-lg p-1.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-1.5 px-4 rounded-lg transition-all duration-300 border-[0.5px] border-white/20 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      <div
        className={`moving-border backdrop-blur-lg ${
          !isMobile ? "col-span-2 row-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl p-4 flex flex-col shiny-gradient hover:bg-white/15 transition-all duration-300`}
      >
        <h2 className="text-2xl text-center text-white font-bold bg-gray-950 border-[0.5px] border-white/20 rounded-xl py-2 px-4 shadow-lg mb-3">
          Socials
        </h2>
        <div className="grid grid-cols-3 gap-3 p-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border-[0.5px] border-white/20 group"
            >
              <div className="p-3 flex justify-center items-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-all">
                {social.icon}
              </div>
              <span className="text-white font-medium text-sm">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`moving-border backdrop-blur-lg ${
          !isMobile ? "row-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl p-4 flex flex-col shiny-gradient hover:bg-white/15 transition-all duration-300`}
      >
        <h2 className="text-2xl text-center  text-white font-bold bg-gray-950 border-[0.5px] border-white/20 rounded-xl py-2 px-4 shadow-lg mb-2">
          Projects
        </h2>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/mudpirate/Bot-Verse-chat-app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 rounded-xl p-4 border-[0.5px] mt-4 border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Botverse Chat App
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                React.js
              </span>
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                Socket.io
              </span>
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                GeminiAPI
              </span>
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                MongoDB
              </span>
            </div>
          </a>
          <a
            href="https://github.com/mudpirate/e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 rounded-xl p-4 border-[0.5px] mt-4 border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              E-Commerce store
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                React.js
              </span>
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                zustand
              </span>
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                tailwind
              </span>
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md">
                express
              </span>
            </div>
          </a>
        </div>
      </div>

      <div
        className={`moving-border backdrop-blur-lg ${
          !isMobile ? "row-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl p-4 flex flex-col shiny-gradient hover:bg-white/15 transition-all duration-300`}
      >
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center space-y-4">
            <div className="text-white/90 italic">
              "{quotes[currentQuote].text}"
            </div>
            <div className="text-white/70 text-sm">
              - {quotes[currentQuote].source}
              <span className="text-white/50 text-xs ml-2">
                ({quotes[currentQuote].anime})
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center items-center${
          isMobile ? " hidden" : ""
        }`}
      >
        {" "}
        <div
          className={`moving-border flex backdrop-blur-lg ${
            !isMobile ? "" : ""
          } bg-white/10 rounded-2xl shadow-xl overflow-hidden min-h-[full] shiny-gradient hover:bg-white/15 transition-all duration-300 sm:block`}
        >
          <img
            src={logo}
            className="object-cover w-full h-full border-2 border-gray-600 rounded-2xl hover:scale-105 transition-transform duration-500"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Bento;
