import React from "react";

const MenuBar: React.FC = () => {
  return (
    <div className="bg-[#1c1c1c] grid grid-rows-1 px-[8%] py-3 grid-flow-col justify-start text-3xl gap-6">
      <a className="font-bold"> Anya Forger </a>
      <a className="ml-14"> Projects </a>
      <a> Source </a>
    </div>
  )
}

export default MenuBar
