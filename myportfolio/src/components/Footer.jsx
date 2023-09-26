import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="rounded-lg md:px-10 px-7 mt-24 bg-blue-600 pb-4">
      <div className="text-white  flex flex-col md:flex-row justify-between items-center my-5">
        <p className="mt-10 md:mt-2">@ Copyright 2023 |Chinwe Chukwuogor</p>
        <p className="mt-2 hidden sm:block">Frontend Developer</p>
        <p className="mt-2 hidden sm:block">UI Designer</p>

        <p className="mt-2 hidden sm:block">Designed by @CKiraadaves</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center ">
        <a
          className="text-white"
          href="https://www.https://www.facebook.com/chukwuogor.c.lusciousangel/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon></FacebookIcon>
        </a>
        <a
          className="ml-4 text-white"
          href="https://instagram.com/kiraadaves"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon></InstagramIcon>
        </a>
        <a
          className="ml-4 text-white"
          href="https://twitter.com/ckiraadaves/"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon></TwitterIcon>
        </a>
        <a
          className="ml-4 text-white"
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon></WhatsAppIcon>
        </a>
      </div>
    </div>
  );
};

export default Footer;
