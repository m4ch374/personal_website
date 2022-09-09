import React from "react";
import Image from "next/image";
import Section from "./Section";

interface IIntro {
  imagePath?: string,
  className?: string
}

const Intro: React.FC<IIntro> = ({ imagePath = "", className="" }) => {
  return (
    <Section className={className}>
      <img src={imagePath} width="200px" height="200px" alt="introImg" className="rounded-full" />
      <div className="grid grid-cols-1 place-items-start gap-1 w-[300px] pt-[8px]">
        <span className="text-5xl font-bold text-center w-full"> Henry Wan </span>
        <span className="text-lg text-center w-full"> Computer Science student at UNSW </span>
      </div>
    </Section>
  )
}

export default Intro
