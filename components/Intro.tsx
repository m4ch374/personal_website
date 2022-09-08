import React from "react";
import Image from "next/image";
import Section from "./Section";

interface IIntro {
  imagePath?: string,
  className?: string
}

const Intro: React.FC<IIntro> = ({ imagePath = "/funni_anya.png", className="" }) => {
  return (
    <Section className={className}>
      <Image src={imagePath} width="250px" height="250px" alt="introImg" className="rounded-full" />
      <div className="grid grid-cols-1 place-items-start gap-1 w-[300px] pt-[8px]">
        <span className="text-6xl font-bold"> Henry Wan </span>
        <span className="text-2xl"> Computer Science student at UNSW </span>
      </div>
    </Section>
  )
}

export default Intro
