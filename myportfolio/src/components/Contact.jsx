import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
    return (
      <div className="md:px-10 px-7 my-10" id="contact">
        <div className="flex flex-col md:flex-row">
          {/* text and icons */}
          <div className="md:w-1/2">
            <h1 className="text-blue-600 font-semibold text-4xl mt-16">
              Connect with me
            </h1>
            <p className="my-3 text-blue-600 md:w-3/4 leading-[2]">
              Satisfied with me? Please contact me
            </p>
            {/* social icons */}
            <div className="flex ">
              <a
                href="https://www.linkedin.com/in/chinwe-chukwuogor-400404118/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a
                className="ml-4 text-blue-600"
                href="https://github.com/Kiraadaves/"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon></GitHubIcon>
              </a>
              <a
                className="ml-4 text-blue-600"
                href="mailto:chukwuogorchinwe@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon></EmailIcon>
              </a>
            </div>
          </div>
          {/* form */}
          <div className="md:w-1/2">
            <p className="mt-16 text-blue-600 text-4xl mb-6 font-semibold">
              Contact me, let's make magic together
            </p>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name:"
                className=" focus:outline-blue-600  bg-blue-600 bg-opacity-10 py-3 px-3  w-full rounded "
              />
              <input
                type="email"
                name="email"
                placeholder="Email:"
                className="focus:outline-blue-600 bg-blue-600 bg-opacity-10 py-3 px-3  w-full rounded my-3"
              />
              <textarea
                name="message"
                id="message"
                cols="54"
                rows="4"
                className="bg-blue-600 focus:outline-blue-600 bg-opacity-10 py-3 px-3  w-full rounded mb-2"
                placeholder="Message:"
              ></textarea>
              <button className="btn transition-all duration-500  py-2 px-12 rounded-lg  bg-blue-600 text-white font-semibold hover:bg-blue-500 hover:text-white block">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;