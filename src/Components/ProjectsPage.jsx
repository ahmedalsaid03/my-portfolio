import { useState } from "react";
import Modal from "./Modal";
import { CgCloseO } from "react-icons/cg";
import {motion} from 'framer-motion'
import Button from "./Button";

const ProjectsPage = ({toR ,id, image, title, description, tools,Link,modal }) => {
    const [isOpen, setIsOpen] = useState(false)
    function handleOpenModal(){
        setIsOpen(prevState => !prevState)
    }
    function handleCloseModal(){
        setIsOpen(false)
    }



    //  const ItemVariants = {
    //    hidden: { width: "0%", right: 0 },
    //    visible: { width: "100%" }, 
    //  };

  return (
    <>
      <Modal open={isOpen}>
        <div className=' grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 bg-transparent h-full max-h-full'>
          <div className='col-span-1 row-span-2 lg:col-span-2 lg:row-span-3  bg-transparent '>
            <img
              className='w-full h-full object-contain'
              src={modal}
              alt={title}
            />
          </div>
          <div className='col-span-1 row-span-3  flex flex-wrap flex-col md:flex-row justify-evenly md:items-center '>
            <p className='md:w-[50%] lg:w-fit  text-white'>
              {description}
            </p>
            <div className=' md:w-[50%] md:h-full lg:h-[30%] lg:w-[100%] p-3 flex flex-row md:flex-col flex-wrap justify-evenly  '>
              <div className="w-full max-w-full">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className='mx-2 p-1 text-white w-fit  h-[30px] '>
                    {tool}
                  </span>
                ))}
              </div>
              <a className='w-full my-2 ' href={Link} target='_blank'>
                <Button> Visit </Button>
              </a>
            </div>
          </div>
          <form className=' absolute top-0 right-0 ' method='dialog'>
            <button
              className='bg-primary-color rounded-full text-black'
              onClick={handleCloseModal}>
              <CgCloseO size={30} />
            </button>
          </form>
        </div>
      </Modal>
      <motion.div
        onClick={handleOpenModal}
        initial={{ x: toR ? "-10vw" : "10vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className='relative col-span-1 md:col-span-2 '>
        <img className=' w-full h-full' src={image} alt={title} />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          className='w-[100%] h-[100%] bg-purple-500/25 cursor-pointer z-10 absolute inset-0 flex items-center justify-center'></motion.div>
      </motion.div>
    </>
  );
};

export default ProjectsPage
