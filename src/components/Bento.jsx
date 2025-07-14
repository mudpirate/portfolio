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
import Projects from "./Projects";

const Bento = ({ isMobile }) => {
  const socials = [
    {
      icon: <FaGithub className="text-2xl sm:text-3xl" />,
      label: "GitHub",
      link: "https://github.com/mudpirate",
    },
    {
      icon: <FaLinkedinIn className="text-2xl sm:text-3xl" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nomesh-singh-121510328/",
    },
    {
      icon: <FaTwitter className="text-2xl sm:text-3xl" />,
      label: "Twitter",
      link: "https://x.com/mud_pirate__",
    },
    {
      icon: <FaDiscord className="text-2xl sm:text-3xl" />,
      label: "Discord",
      link: "https://discord.com/",
    },
    {
      icon: <FaFacebookF className="text-2xl sm:text-3xl" />,
      label: "Facebook",
      link: "https://facebook.com/",
    },
    {
      icon: <FaInstagram className="text-2xl sm:text-3xl" />,
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

  const gridClassName =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-4 sm:p-6 max-w-full min-h-screen";

  return (
    <>
      <div className={gridClassName}>
        {isMobile && (
          <div className="block md:hidden ml-2 shiny-gradient items-center backdrop-blur-lg bg-white/10 p-4 rounded-2xl gap-3  w-full max-w-xs mx-auto text-center xl:col-span-2">
            <img
              src={logo}
              className="object-cover w-16 h-16 mx-auto border-2 border-gray-600 rounded-full mb-2"
              alt="Profile"
            />
            <p className="text-white text-sm">
              Hi, This is mudpirate here. Welcome to my portfolio website.
            </p>
          </div>
        )}
        <div className="hidden lg:flex  h-full w-full xl:col-span-2 xl:row-span-2">
          <img
            src={logo}
            className="object-cover w-full h-auto border-2 border-gray-600 rounded-2xl hover:scale-105 transition-transform duration-500"
            alt="Profile"
          />
        </div>

        <div className="bg-white/10 rounded-2xl shadow-xl p-4 w-full max-w-xl mx-auto col-span-2 shiny-gradient xl:col-span-2 xl:row-span-1">
          <h1 className="text-2xl text-center text-white font-bold bg-gray-950 border border-white/20 rounded-xl py-2 px-4 shadow-lg mb-4">
            About Me
          </h1>
          <p className="text-white text-sm sm:text-base">
            Hi, I'm Mud Pirate (Nomesh) — a passionate and fast-learning
            full-stack developer currently pursuing a B.Tech in Information
            Technology at the University of Kalyani, West Bengal. As a
            sophomore, I've already immersed myself in the world of web
            development. I'm most comfortable working with technologies like
            React, Express, Tailwind CSS, and shadcn/ui.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl shadow-xl p-4 w-full max-w-xl mx-auto col-span-2 shiny-gradient xl:col-span-2 xl:row-span-1">
          <h2 className="text-2xl text-center text-white font-bold bg-gray-950 border border-white/20 rounded-xl py-2 px-4 shadow-lg mb-4">
            Contact Me
          </h2>
          <form
            className="space-y-4"
            action="https://formspree.io/f/xldnpykv"
            method="post"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white placeholder-white/50 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="3"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white placeholder-white/50 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white/10 rounded-2xl shadow-xl p-2  w-full max-w-xl mx-auto col-span-2 row-span-2 shiny-gradient xl:col-span-2 xl:row-span-2">
          <h2 className="text-2xl text-center  text-white font-bold bg-gray-950 border border-white/20 rounded-xl py-2 px-4 shadow-lg mb-4">
            Socials
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 xl:mt-10  gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 border border-white/20"
              >
                <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20">
                  {social.icon}
                </div>
                <span className="text-white text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl shadow-xl p-4 w-full col-span-2 row-span-2 shiny-gradient xl:col-span-2 xl:row-span-2">
          <Skills />
        </div>

        <div className="bg-white/10 h-50 md:h-90 rounded-2xl w-full shadow-xl p-4  flex items-center justify-center text-center shiny-gradient xl:col-span-2 xl:row-span-1">
          <div>
            <p className="text-white italic text-sm">
              "{quotes[currentQuote].text}"
            </p>
            <p className="text-white/70 text-xs">
              - {quotes[currentQuote].source} ({quotes[currentQuote].anime})
            </p>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Bento;
