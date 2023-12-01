import React from "react"

type TExperience = {
  company: string
  jobTitle: string
  location: string
  start: string
  end: string
  children: string | JSX.Element | JSX.Element[]
}

const Experience: React.FC<TExperience> = (props) => {
  const { company, jobTitle, location, start, end, children } = props
  
  return (
    <div className="w-full my-6">
      <div className="flex justify-between text-xl">
        <h3 className="font-bold text-sky-500 dark:text-violet-300">
          {company}
          <span className="font-thin"> | {jobTitle}</span>
        </h3>
        <h3>{location} | {start} - {end}</h3>
      </div>
      <div className="pt-4">
        {children}
      </div>
    </div>
  )
}

export default Experience
