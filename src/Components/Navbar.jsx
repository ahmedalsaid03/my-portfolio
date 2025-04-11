import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion ,AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleNavBar() {
    setNav((prevNavState) => !prevNavState);
  }
  return (
    <div className=' bg-[#1e1e1e] shadow-[0_4px_4px_0px_#6286a1]   sm:opacity-90 z-50 text-gray-400 h-[70px] flex justify-between items-center fixed inset-0'>
      <h1 className='text-3xl font-bold text-[#4A6A8B]  ml-4 w-[15%] h-full '>
        <img src={logo} alt='logo' className='w-full h-full object-cover' />
      </h1>
      <ul className='hidden md:flex nav'>
        <li className='p-5 '>
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='cursor-pointer'>
            HOME
          </Link>
        </li>
        <li className='p-5'>
          <Link
            to='about'
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer'>
            ABOUT
          </Link>
        </li>
        <li className='p-5'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer'>
            SKILLS
          </Link>
        </li>
        <li className='p-5'>
          <Link
            to='projects'
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer'>
            PROJECTS
          </Link>
        </li>
        <li className='p-5'>
          <Link
            to='experience'
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer'>
            EXPERIENCE
          </Link>
        </li>
        <li className='p-5'>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer'>
            CONTACT ME
          </Link>
        </li>
      </ul>
      <div
        onClick={handleNavBar}
        className='block mr-6 md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, width: "0px" }}
            animate={{ opacity: 1, width: "50%" }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, width: "0px" }}
            className='fixed z-50 h-full left-0 top-0 bg-[#1d1d1d] ease-in-out md:hidden'>
            <h1 className='h-[20%] flex justify-start'>
              <img src={logo} alt='logo' className=" object-contain w-[60%]" />
            </h1>
            <ul className='p-4 text-2xl h-[80%]'>
              <li className='p-1 mb-1'>
                <Link
                  to='home'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer'>
                  HOME
                </Link>
              </li>
              <li className='p-1 mb-1'>
                <Link
                  to='about'
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className='cursor-pointer'>
                  ABOUT
                </Link>
              </li>
              <li className='p-1 mb-1'>
                <Link
                  to='skills'
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className='cursor-pointer'>
                  SKILLS
                </Link>
              </li>
              <li className='p-1 mb-1'>
                <Link
                  to='projects'
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className='cursor-pointer'>
                  PROJECTS
                </Link>
              </li>
              <li className='p-1 mb-1'>
                <Link
                  to='experience'
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className='cursor-pointer'>
                  EXPERIENCE
                </Link>
              </li>
              <li className='P-1'>
                <Link
                  to='contact'
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className='cursor-pointer'>
                  CONTACT ME
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
