import React from 'react'
import { TerminalIcon, ChipIcon } from '@heroicons/react/solid'
import { skills } from '../data/data'

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black dark:text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I'm constantly looking for the next library or framework to learn
            and the next development trend to investigate. That's what I like
            the most about technology
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <TerminalIcon className="text-red-800 w-6 h-6 flex-shrink-0 mr-4" />
                <a href={skill.url}>
                  <span className="title-font font-medium text-black dark:text-white hover:text-red-800">
                    {skill.name}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
