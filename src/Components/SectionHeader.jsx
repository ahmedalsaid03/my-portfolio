import {motion} from 'framer-motion'
const SectionHeader = ({first, second,sectionid}) => {
  return (
    <motion.div
      initial={{ y: "20px" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      id={sectionid}
      className=' w-full  h-[110px] text-center relative my-8  '>
      <h2 className=' absolute left-[50%] translate-x-[-50%] primary-color  font-extrabold text-5xl md:text-8xl tracking-wider w-fit opacity-80  '>
        {first}
      </h2>
      <h3 className='absolute left-[50%] translate-x-[-50%] top-[70%] primary-color z-20 translate-y-[-50%] sm:translate-y-[-30%]  font-bold text-4xl md:text-5xl'>
        {second}
      </h3>
    </motion.div>
  );
};

export default SectionHeader;
