import React from "react";
import Car from "./Car";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/newproject.webp";
import image6 from "../assets/images/ww.webp";

const Card = () => {
  const projects = [
    {
      id: 6,
      img: image6,
      title: "ZenFunds",
      git: "https://github.com/mudpirate/Zenfunds",
      link: "https://zenfunds.vercel.app",
      description: `ZenFunds, A modern finance managing app  with advanced AI-powered report analysis, giving clear insights into your income, expenses, and savings. It features a real-time dashboard to monitor spending, predict cash flow, and suggest smarter saving strategies.`,
      tech: [
        "Next.js",
        "typescript",
        "Deepseek AI",
        "TailwindCss",
        "neonDB",
        "prisma",

        "Clerk",
      ],
    },
    {
      id: 5,
      img: image5,
      title: "The Pitch",
      git: "https://github.com/mudpirate/Football-blog",
      link: "https://football-blog-one.vercel.app",
      description: `
The Pitch is an AI-powered blog platform that lets you create, manage, and discover content with ease. Featuring Gemini AI for smart blog generation, a rich text editor, advanced search and filtering, personalized dashboards, and optimized image uploads, it delivers a seamless, responsive, and high-performance blogging experience.`,
      tech: [
        "React",
        "Gemini AI",
        "TailwindCss",
        "express",
        "Tanstack Query",
        "zustand",
        "ImageKit",
        "axios",
        "nodeJs",
        "Clerk",
        "MongoDB",
      ],
    },
    {
      id: 2,
      img: image2,
      title: "ConGame",
      git: "https://github.com/mudpirate/Gaming-rental",
      link: "https://gaming-rental.vercel.app",
      description: `ConGame is a full-stack gaming console rental platform with secure authentication, real-time bookings, and live availability checks. It offers an admin dashboard for managing consoles and users, detailed game listings, owner analytics, and a sleek modern UI built with shadcnUI.`,
      tech: [
        "React",
        "TailwindCss",
        "express",
        "JWT",
        "shadcnUI",
        "ImageKit",
        "axios",
        "nodeJs",
        "MongoDB",
        "Framer Motion",
      ],
    },
    {
      id: 4,
      img: image4,
      title: "BotVerse",
      git: "https://github.com/mudpirate/Bot-Verse-chat-app",
      link: "https://chevy-malibu-demo.com",
      description: `Bot-Verse is a real-time chat application built with the MERN stack and Socket.io.
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
      id: 1,
      img: image1,
      title: "FootLand",
      git: "https://github.com/mudpirate/e-commerce",
      link: "https://e-commerce-one-lyart-97.vercel.app",
      description: ` A responsive E-Commerce frontend built with React and Tailwind CSS. Features include dynamic product listings, category-based filtering, a functional shopping cart, and smooth page navigation using React Router. Designed for scalability and fast user experience.`,
      tech: ["React", "TailwindCss", "useReducer", "shadcnUI", "Framer Motion"],
    },

    {
      id: 3,
      img: image3,
      title: "Portfolio Website",
      git: "https://github.com/mudpirate/portfolio",
      link: "https://portfolio-tmmd.vercel.app",
      description: ` Personal Portfolio Website built with modern web technologies to showcase projects and skills.
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
