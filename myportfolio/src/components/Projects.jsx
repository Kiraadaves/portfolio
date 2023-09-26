import React from "react";
import drag from "../assets/drag.png";
import tindog from "../assets/tindog.png";
import movie from "../assets/movie.png";

const Projects = () => {
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-blue-600 text-center font-semibold text-4xl mt-16">
        Featured projects
      </h1>
      <p className="my-3 text-blue-600 md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      <div className="mx- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 my-6 items-center justify-center ">
        <div className="flex items-center flex-col shadow-sm md:w-[380px] border-blue-600 border-2 p-10 rounded ">
          <img src={drag} alt="" className="mb-4 h-60 w-full rounded-lg" />
          <h3 className="text-blue-600 font-semibold text-lg">DragDrop</h3>
          <p className=" text-blue-600 mt-4">
            An image gallery with a drag and drop feature
          </p>
          <div className="mt-5">
            <a href="https://dragn-drop-orpin.vercel.app/">
              <button className="btn transition-all duration-500 bg-blue-600 py-2 px-6 rounded text-white font-semibold hover:bg-blue-500 hover:text-white">
                View
              </button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
          <div className="flex items-center flex-col shadow-sm md:w-[380px] border-blue-600 border-2 p-10 rounded">
            <img src={movie} alt="" className="mb-4 h-60 w-full rounded-lg " />
            <h3 className="text-blue-600 font-semibold text-lg">MovieBox</h3>
            <p className=" text-blue-600 mt-4">
              A simple movie app using TMDB API.
            </p>
            <div className="mt-5">
              <a href="https://dragn-drop-orpin.vercel.app/">
                <button className="btn transition-all duration-500 bg-blue-600 py-2 px-6 rounded text-white font-semibold hover:bg-blue-500 hover:text-white">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col shadow-sm md:w-[380px] border-blue-600 border-2 p-10 rounded">
          <img src={tindog} alt="" className="mb-4 h-60 w-full rounded-lg" />
          <h3 className="text-blue-600 font-semibold text-lg">TinDog</h3>
          <p className=" text-blue-600 mt-4">
            A remake of the tindog website for users to adopt lost puppies.
          </p>
          <div className="mt-5">
            <a href="dragn-drop-orpin.vercel.app">
              <button className="btn transition-all duration-500 bg-blue-600 py-2 px-6 rounded text-white font-semibold hover:bg-blue-500 hover:text-white">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
