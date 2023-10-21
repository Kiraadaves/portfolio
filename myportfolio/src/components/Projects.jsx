import React from "react";
import drag from "../assets/drag.png";
import tindog from "../assets/tindog.png";
import movie from "../assets/movie.png";
import advice from "../assets/advice.png";
import hng from "../assets/hng.png";
import newsletter from "../assets/newsletter.png";
import w from "../assets/w.png";
import snap from '../assets/snap.png'
const projects = [
  {
    id: 1,
    src: `${drag}`,
    title: "DragDrop",
    about: "An image gallery with a drag and drop feature",
  },
  {
    id: 2,
    src: `${movie}`,
    title: "MovieBox",
    about: "A simple movie app using TMDB API",
  },
  {
    id: 3,
    src: `${tindog}`,
    title: "TinDog",
    about: "A remake of the tindog website landing page",
  },
  {
    id: 4,
    src: `${advice}`,
    title: "Advice Generator",
    about: "Click the button to get an advice",
  },
  {
    id: 5,
    src: `${hng}`,
    title: "LandingPage",
    about: "A simple landing page from HNGx internship",
  },
  {
    id: 6,
    src: `${newsletter}`,
    title: "Newsletter Subscription",
    about: "Newsletter subscription with success/error message",
  },
  {
    id: 7,
    src: `${w}`,
    title: "Responsive Dropdown",
    about: "Responsive Landing page with dropdown",
  },
  {
    id: 8,
    src: `${snap}`,
    title: "Snap",
    about: "Welcome page for snap",
  },
];

const Projects = () => {
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-blue-600 text-center font-semibold text-4xl mt-16">
        Featured projects
      </h1>
      <p className="my-3 text-blue-600 md:w-3/4 leading-[2]">
        I have worked on and contributed in few projects over the course of
        being a Web Developer, here are a few of my live, projects
      </p>
      <div className="mx- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 my-6 items-center justify-center ">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:w-[380px] border-slate-200 shadow-lg border-2 p-4 rounded ">
            <img src={project.src} alt="" className="mb-4 h-60 w-full rounded-lg object-cover" />
            <h3 className="text-blue-600 font-semibold text-lg text-center">{project.title}</h3>
            <p className=" text-blue-600 mt-4 text-center text-sm">
              {project.about}
            </p>
            <div className="mt-5 justify-center flex">
              <a href="https://dragn-drop-orpin.vercel.app/">
                <button className="btn transition-all duration-500 bg-blue-600 py-1 px-9 rounded text-white font-semibold hover:bg-blue-500 hover:text-white">
                  View
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
