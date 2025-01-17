import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="relative flex flex-col justify-center items-center h-[49.7rem] w-full bg-gradient-to-r from-black via-gray-900 to-gray-700">
      <div className="h-[30rem] w-6/12 rounded-lg shadow-lg relative overflow-hidden">
        <img
          src="https://files.cdn-files-a.com/uploads/9435802/2000_668d1174d10d6.jpg"
          alt="About"
          className="object-cover h-full w-full rounded-2xl"
        />
        <motion.div
          className="absolute bottom-10 left-10 m-4 p-6 bg-black bg-opacity-80 rounded-lg shadow-2xl w-4/12 h-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Mental Wellness Haven, we prioritize a holistic approach to
            mental health recovery. Our expert team is committed to creating a
            nurturing environment where individuals can heal and thrive. We
            offer personalized care plans, therapy sessions, and community
            support to help every resident achieve their best mental health.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
