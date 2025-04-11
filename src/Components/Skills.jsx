import { motion } from "framer-motion";
import images from "../util/skills-images";
import SectionHeader from "./SectionHeader";

// Variants for the container (parent)
// const containerVariants = {
//   visible: {
//     transition: {
//       staggerChildren: 0.20, // Delay between each child animation
//     },
//   },
// };

// Variants for the children (individual items)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <>
      <SectionHeader first='SKILLS' second='' sectionid='skills' />

      <motion.div
        className='p-2 grid grid-cols-6 sm:grid-cols-12 justify-items-center items-center gap-8 bg-transparent max-w-[1200px] mx-auto'
        // variants={containerVariants}
        initial='hidden'
        whileInView='visible'>
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className=' w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full bg-transparent col-span-2 sm:col-span-3 flex flex-col justify-center items-center'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='w-[40px] h-[40px] md:w-[100px] md:h-[100px] rounded-full'>
              <img
                className='object-contain w-full h-full'
                src={image.image}
                alt=''
              />
            </motion.div>
            <p className='text-primary-color text-[10px] sm:text-[12px] md:text-[20px] mt-3'>
              {image.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
