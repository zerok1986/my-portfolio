import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Miky!
            <br />I love to build next-gen web apps
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a skilled and motivated Full Stack Developer always looking for
            new challenges and new things to learn. I'm used to work with Agile
            methodologies and CI/CD environments
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./programming.svg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
