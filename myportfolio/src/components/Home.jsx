import React from "react";
import profile from "../assets/LINKEDINPHOTO.jpg";
const Home = () => {
  return (
    <div className="px-7 md:px-10 my-20   rounded-lg" id="home">
      <div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-blue-600 text-center md:text-left">
            <h6 className="text-3xl mt-12">Hi, I'm</h6>
            <h1 className="font-semibold text-3xl md:text-5xl my-4">
              Chinwe Chukwuogor
            </h1>
            <p className="md:w-96 my-9">
              I'm a freelance Frontend Developer and UI designer. I create
              beautiful and seamless web design and experiences for end-users.
            </p>
            <div className="mt-5">
              <button className="btn bg-blue-600 py-2 px-4 text-blue-200 rounded-lg hover:bg-blue-200 font-semibold hover:text-blue-600 transition-all duration-500">
                About me
              </button>
              <button className="btn outline py-1.5 px-6 rounded ml-5 font-semibold text-blue-600 border-none hover:bg-blue-600 hover:text-blue-200 transition-all duration-500">
                Projects
              </button>
            </div>
          </div>
          <div className="order-first md:order-last relative">
            <img src={profile} alt="my-img" className="rounded-lg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
