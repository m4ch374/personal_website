import React from "react"
import Intro from "./Intro"

const MainBody: React.FC = () => {
  return (
    <div className="grid grid-cols-1 place-items-center py-4">
      <Intro imagePath="/funni_anya.png" />
    </div>
  )
}

export default MainBody
