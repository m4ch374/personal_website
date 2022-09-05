import React from "react";
import Image from "next/image";

interface IIntro {
  imagePath?: string,
  className?: string
}

const Intro: React.FC<IIntro> = ({ imagePath = "/funni_anya.png", className="" }) => {
  return (
    <div className={`grid grid-cols-1 place-items-start gap-8 ${className}`}>
      <Image src={imagePath} width="250px" height="250px" className="rounded-full" />
      <div className="grid grid-cols-1 place-items-start gap-1">
        <span className="text-6xl font-bold"> Anya Forger </span>
        <span className="text-3xl"> Daughter of the Forger family </span>
      </div>
    </div>
  )
}

export default Intro
