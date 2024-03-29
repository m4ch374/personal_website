import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Section from "./Section";
import { ThemeContext } from "./Themes/ThemeProvider";
import { motion, MotionValue, useMotionValue } from "framer-motion";

interface IIntroImage {
  imagePath?: string
}

const IntroImage: React.FC<IIntroImage> = ({imagePath}) => {
  const isDark = useContext(ThemeContext)[0]

  const isDragRef = useRef(false)

  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handlePosChange = useCallback((
      tracker: MotionValue<number>, 
      setter: Function
    ) => {

    tracker.onChange((latest) => {
      if (isDragRef.current) {
        setter(latest)
      } else {
        setter(0)
      }
    })
  }, [dragX.get(), dragY.get()])
  
  useEffect(() => {
    handlePosChange(dragX, setX)
    handlePosChange(dragY, setY)
  }, [handlePosChange])

  const transition = isDragRef.current ? { type: "spring" } : {
    type: "spring",
    stiffness: 100,
    damping: 100
  }

  return (
    <div className="relative grid place-items-center">
      <motion.div className="absolute -top-[90px] -left-[80px] w-[370px] h-[370px] z-[2]"
        animate={{x: x * 0.6, y: y * 0.7}}
        transition={transition}>
        <svg version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 500 500" 
          width="100%" 
          id="blobSvg" 
          filter="blur(0px)" 
          style={{opacity: 1}}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={isDark ? {stopColor: "#C780FA"} : {stopColor: "#26BAEE"}}></stop>
              <stop offset="100%" style={isDark ? {stopColor: "#C780FA"} : {stopColor: "#26BAEE"}}></stop>
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient)" style={{opacity: "0.2"}}>
            <animate attributeName="d" dur="40s" repeatCount="indefinite" values="M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z" />
          </path>
        </svg>
      </motion.div>

      <motion.div className="absolute -top-[130px] -left-[150px] w-[500px] h-[500px] z-[1]"
        animate={{x: x * 0.2, y: y * 0.4}}
        transition={transition}>
        <svg version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 500 500" 
          width="100%" 
          id="blobSvg" 
          filter="blur(3px)" 
          style={{opacity: 1}}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={isDark ? {stopColor: "#C780FA"} : {stopColor: "#26BAEE"}}></stop>
              <stop offset="100%" style={isDark ? {stopColor: "#C780FA"} : {stopColor: "#26BAEE"}}></stop>
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient)" style={{opacity: "0.1"}}>
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z" />
          </path>
        </svg>
      </motion.div>

      <motion.img src={imagePath} 
        width="200px" 
        height="200px" 
        alt="introImg" 
        draggable={false} 
        className="relative rounded-full z-[10] shadow-lg" 
        drag
        dragConstraints={{left: -80, right: 80, top: -80, bottom: 80}}
        dragSnapToOrigin
        dragElastic={0.4}
        whileDrag={{zIndex: 10, scale: 1.1, boxShadow: "0px 10px 20px 5px rgba(0, 0, 0, 0.3)"}}
        onDrag={() => isDragRef.current=true}
        onDragEnd={() => isDragRef.current=false}
        dragTransition={{bounceDamping: 90, bounceStiffness: 200}}
        style={{x: dragX, y: dragY}}
      />
    </div>
  )
}

interface IIntro {
  imagePath?: string,
  className?: string
}

const Intro: React.FC<IIntro> = ({ imagePath = "", className="" }) => {
  return (
    <Section className={`${className}`}>
      <IntroImage imagePath={imagePath} />

      <div className="grid grid-cols-1 place-items-start gap-1 w-[300px] pt-[8px] z-[3]">
        <span className="text-5xl font-bold text-center w-full"> Henry Wan </span>
        <span className="text-lg text-center w-full"> Computer Science student at UNSW </span>
      </div>
    </Section>
  )
}

export default Intro
