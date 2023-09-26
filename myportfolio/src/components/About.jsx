import React from "react";
import react from "../assets/react.png"
import next from "../assets/next.png";
import git from "../assets/github.png";
import tailwind from "../assets/tailwindtrans.png";
import Services from "./Services";
const About = () => {
   

  return (
    <div
      className=" py-10 md:px-10 px-7 mt-2 rounded-lg bg-blue-600"
      id="about"
    >
      <h1 className="text-primary font-semibold text-center  text-white text-4xl mt-5">
        About me
      </h1>
      <p className="my-11  text-white md:full md:mx-auto leading-[2]">
        Hi, I'm Chinwe Chukwuogor a frontend developer who's passionate about
        crafting beautiful and user-friendly websites. With expertise in HTML,
        CSS, JavaScript, and modern frameworks like React and Vue.js, I turn
        ideas into stunning digital experiences. I prioritize user-centered
        design and accessibility, ensuring that my work is both visually
        appealing and functional. When I'm not coding, I'm exploring design
        trends and sketching new ideas. Here are the major skiills I have.
      </p>

      <div className="flex flex-col md:flex-row justify-between w-full ">
        <div className="rounded-xl  bg-white w-[256px] md:h-[254px]  hover:bg-blue-100 flex flex-col items-center justify-center md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
          <img src={react} alt="react" className="w-24 h-24" />
          <p className="text-blue-600 text-lg font-semibold mt-3">React.js</p>
        </div>
        <div className="rounded-xl  bg-white w-[256px] md:h-[254px]  hover:bg-blue-100 flex flex-col items-center justify-center md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
          <img src={next} alt="next" className="w-24 h-24" />
          <p className="text-blue-600 text-lg font-semibold mt-3">Next.js</p>
        </div>
        <div className="rounded-xl  bg-white w-[256px] md:h-[254px]  hover:bg-blue-100 flex flex-col items-center justify-center md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
          <img src={git} alt="git" className="w-24 h-24" />
          <p className="text-blue-600 text-lg font-semibold mt-3">Git</p>
        </div>
        <div className="rounded-xl  bg-white w-[256px] md:h-[254px]  hover:bg-blue-100 flex flex-col items-center justify-center md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
          <img src={tailwind} alt="tailwind" className="w-24 h-24" />
          <p className="text-blue-600 text-lg font-semibold mt-3">Tailwind CSS</p>
        </div>
      </div>

      <div className="md:flex my-7 items-center">
        <div className="text-white text-8xl font-bold my-9">1+</div>
        <p className="text-white text-2xl md:ml-5 mt-4">
          Years of experience. Specialised in building frontend applications,
          while ensuring a seamless web experience for end users.
        </p>
          </div>
          <Services />
    </div>
  );
};

export default About;
