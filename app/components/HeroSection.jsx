"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showNotification, setShowNotification] = useState(false);

  const handleImageClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1500);
  };

  return (
    <section className="lg:py-16" id="home">
      {showNotification && (
        <div className="fixed top-0 left-0 right-0 bg-primary-500 text-white text-center py-2 z-50">
          Yes, I know, it's a nice photo.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-12 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: "50%" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="col-span-7 place-s"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl leading-normal font-extrabold justify-self-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I`m {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Eduard", 1500, "Web Developer", 1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            {" "}
            When I’m not building web applications, I enjoy hiking through
            nature and playing the guitar. Turning ideas into remarkable
            projects is what drives me every day!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500  to-secondary-500 text-white mt-3">
              <ScrollLink
                to={"contact"}
                spy={true}
                smooth={true}
                duration={500}
              >
                Hire me
              </ScrollLink>
            </button>
            <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href="https://drive.google.com/file/d/1QgIFq9KC4-AzN5MxhfexYCHgPEtB0P8B/view?usp=sharing">
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: "50%" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0 md:ml-7"
        >
          <div
            transition={{ type: "spring", duration: 0.5 }}
            className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative"
          >
            <Image
              src="/images/hero-section-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] hover:scale-110 transition-transform duration-300 cursor-pointer"
              width={300}
              height={300}
              onClick={handleImageClick}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
