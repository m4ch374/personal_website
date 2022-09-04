import React from "react";

const MenuBar: React.FC = () => {
  return (
    <div className="bg-[#1c1c1c] grid grid-rows-1 px-[8%] py-3 grid-flow-col justify-start text-3xl gap-6">
      <span className="font-bold cursor-default"> Anya Forger </span>
      <span className="ml-14"> Projects </span>
      <span> Source </span>
    </div>
  )
}

export default MenuBar
