import React from "react";
import Car from "./Car";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/newproject.jpg";

const Card = () => {
  const projects = [
    {
      id: 5,
      img: image5,
      title: "The Pitch",
      git: "https://github.com/mudpirate/Football-blog",
      link: "",
      description: `📝 "The Pitch" is a modern blog platform built for creators and readers. 
Crafted with performance and simplicity in mind, it features a rich text editor, user authentication, 
personalized dashboards, and seamless content browsing. 
Built using the MERN stack with Tailwind CSS, TanStack Query, and ImageKit for optimized media handling.`,
      tech: [
        "React",
        "TailwindCss",
        "express",
        "Tanstack Query",
        "zustand",
        "ImageKit",
        "axios",
        "nodeJs",
        "MongoDB",
      ],
    },
    {
      id: 2,
      img: image2,
      title: "ConGame",
      git: "https://github.com/mudpirate/Gaming-rental",
      link: "https://gaming-rental.vercel.app",
      description: `🎮 Gaming Console Renting Platform built with the MERN stack and Tailwind CSS.
Features include user authentication, booking system, admin dashboard, and real-time availability checks.
Designed with a modern UI, owner analytics, and game listings with detailed specs.`,
      tech: [
        "React",
        "TailwindCss",
        "express",
        "shadcnUI",
        "ImageKit",
        "axios",
        "nodeJs",
        "MongoDB",
      ],
    },
    {
      id: 1,
      img: image1,
      title: "FootLand",
      git: "https://github.com/mudpirate/e-commerce",
      link: "https://e-commerce-one-lyart-97.vercel.app",
      description: `🛒 E-Commerce built with React, Node.js, Express, and MongoDB.
        Features product listing, dynamic cart, and secure JWT-based user authentication.
        Built with a clean UI using Tailwind CSS, and React Router for seamless navigation.`,
      tech: ["React", "TailwindCss", "useReducer", "shadcnUI"],
    },

    {
      id: 4,
      img: image4,
      title: "BotVerse",
      git: "https://github.com/mudpirate/Bot-Verse-chat-app",
      link: "https://chevy-malibu-demo.com",
      description: `💬 Bot-Verse is a real-time chat application built with the MERN stack and Socket.io.
    Supports user authentication, private messaging, and instant communication via WebSockets.
    Designed with a responsive UI, making chatting seamless across devices.`,
      tech: [
        "React",
        "TailwindCss",
        "express",
        "socket.io",
        "ImageKit",
        "axios",
        "nodeJs",
      ],
    },
    {
      id: 3,
      img: image3,
      title: "Portfolio Website",
      git: "https://github.com/mudpirate/portfolio",
      link: "https://portfolio-tmmd.vercel.app",
      description: `🌐 Personal Portfolio Website built with modern web technologies to showcase projects and skills.
Features sections like About, Projects, Contact, and smooth navigation with a responsive, clean UI.
Hosted on Vercel for fast performance and designed to reflect a professional developer profile.`,
      tech: ["React", "TailwindCss", "shadcnUI"],
    },
  ];

  return (
    <div>
      <Car cars={projects} />
    </div>
  );
};

export default Card;
