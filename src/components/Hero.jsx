import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Empowering growth from startups to global enterprises.{' '}
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            →
          </button>
        </motion.div>
      </div>

      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
