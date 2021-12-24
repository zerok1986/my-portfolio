import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="ml-3 text-xl">
            <img src="./M.png" className="w-10" alt="M logo"></img>
          </a>
        </a>
        <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            href="https://zerok1986.github.io/my-resume-html-css/"
            className="mr-5 hover:text-white"
          >
            Resume
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
