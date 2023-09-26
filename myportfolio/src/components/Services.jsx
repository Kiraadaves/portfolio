import React from "react";
import code from "../assets/icons/code.png";
import git from "../assets/icons/git-repo.png";
import js from "../assets/icons/javascript.png";

const tasks = () => {
  return (
    <div className="">
      <h1 className="text-white font-semibold text-4xl mt-20 text-center mt-14">
        My Services
      </h1>
      <div className="grid md:grid-cols-3 my-8 gap-5 mt-14">
        <div className="service-card flex flex-col justify-center items-center p-6 text-center text-white">
          <img src={code} alt="" className="mb-3" />
          <h6 className="text-2xl mb-4">WEB DEVELOPMENT</h6>
          <p className="text-base">
            I create beautiful iterfaces with simple HTML, CSS, & JavaScript and
            also frameworks like Next and ReactJS
          </p>
        </div>
        <div className="service-card flex flex-col justify-center items-center p-6 text-center text-white">
          <img src={git} alt="" className="mb-3" />
          <h6 className="text-2xl mb-4">VERSION CONTROL</h6>
          <p className="text-base">
            I can use version control systems well, and Git & Mecurial are my
            go-to tools
          </p>
        </div>
        <div className="service-card flex flex-col justify-center items-center p-6 text-center text-white">
          <img src={js} alt="" className="mb-3" />
          <h6 className="text-2xl mb-4">NPM AND NODEJS</h6>
          <p className="text-base">
            I have core understanding of NPM. I can also develop general purpose
            applications with NodeJS
          </p>
        </div>
      </div>
    </div>
  );
};

export default tasks;
