import React from "react"
import Intro from "./Intro"
import Paragraph from "./Paragraph"

const MainBody: React.FC = () => {
  return (
    <div className="py-4 w-[50vw] min-w-full grid grid-flow-row place-items-center">
      <div className="flex flex-col gap-10">
        <Intro imagePath="/funni_anya.png" className="place-items-center pt-[70px]" />

        <Paragraph title="About me"> 
          Anya is a short young girl with fair skin and green eyes. 
          Loid describes her as appearing about four to five years old at the oldest. 
          Her green eyes are large and oval-shaped with prominent eyelashes. 
          She has shoulder-length, light pink hair that curls inwards with a fringe that reaches just 
          above her eyes and a small strand of ahoge at the top of her head. 
          Anya is noticeably shorter than most of her peers and many of the insults 
          Damian and his friends direct at her target her small size. 
        </Paragraph>

        <Paragraph title="What I do">
        Anya's true origins, as well as the source of her telepathic abilities, 
        are largely unclear. Prior to being found at the orphanage, 
        she was made by accident, as an unintended consequence of research experiments 
        conducted by an unknown organization. 
        She had the code name 'Test Subject "007"' 
        and was treated very strictly by the scientists, 
        not being allowed to play and forced to learn how to use her powers, 
        seemingly for the sake of world peace.
        </Paragraph>
      </div>
    </div>
  )
}

export default MainBody
