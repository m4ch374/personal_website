import React from "react";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-8">
      <Image src="/funni_anya.png" width="250px" height="250px" className="rounded-full" />
      <div className="grid grid-cols-1 place-items-start">
        <span className="text-6xl font-bold"> Anya Forger </span>
        <span className="text-3xl"> Daughter of the Forger family </span>
      </div>
    </div>
  )
}

export default Intro
