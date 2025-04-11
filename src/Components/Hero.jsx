import StarBg from "../assets/images/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

export default function HeroSection() {
  
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });

  // useMotionValueEvent(scrollYProgress, 'change', (value)=>{
  //   console.log('scrollYProgress',value)
  // })

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={SectionRef}
      className=' h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'
      style={{ backgroundImage: `url(${StarBg.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: StarBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: "120",
        ease: "linear",
      }}>
      <div className=' absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(30,30,30,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>

      {/* start Planet */}
      <div className='absolute h-64 w-64 md:h-96 md:w-96 bg-[6286a1] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_50px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>
      {/* End Planet */}

      {/* Start 1 Ring Here */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: "30",
          ease: "linear",
        }}
        className=' absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className=' absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className=' absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className=' absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
          <div className='h-2 w-2 rounded-full bg-white'></div>
        </div>
      </motion.div>
      {/* End 1 Ring Here */}

      {/* Start 2 Ring Here */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: "80",
          ease: "linear",
        }}
        className=' absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></motion.div>
      {/* End 2 Ring Here */}

      {/* Start 3 Ring Here */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: "90",
          ease: "linear",
        }}
        className=' absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className=' absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className=' absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
      </motion.div>
      {/* End 3 Ring Here */}

      <div className='container relative mt-16'>
        <h1 className=' text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(98, 134, 161,0.5))] bg-white text-transparent bg-clip-text text-center'>
          Welcome
        </h1>
        <p className='text-lg text-center text-white/70 mt-5 md:text-xl max-w-xl mx-auto'>
          I Specialize in transforming designs into functional, high- <br />{" "}
          performing web applications, particularly using react.js <br /> Let's
          discuss your new project!
        </p>
        <div className='flex justify-center mt-5'>
          <div className='flex justify-center mx-2'>
            <Button>Explore More</Button>
          </div>
          <div className='flex justify-center '>
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
