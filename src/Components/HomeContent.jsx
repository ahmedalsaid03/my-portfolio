import { TypeAnimation } from "react-type-animation";
import myImage from "../assets/images/myImage.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
const HomeContent = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //  const handlePreview = () => {
  //    window.open("public/AhmedYousef.pdf", "_blank"); 
  //  };
    // const handleDownload = () => {
    //   const link = document.createElement("a");
    //   link.href = "/public/AhmedYousef.pdf";
    //   link.download = "public/AhmedYousef.pdf"; 
    //   link.click(); 
    // };
  const handlePreview = () => {
    window.open(`${import.meta.env.BASE_URL}AhmedYousef.pdf`, "_blank");
  };
  
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = `${import.meta.env.BASE_URL}AhmedYousef.pdf`;
  //   link.download = "AhmedYousef.pdf";
  //   link.click();
  // };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}AhmedYousef.pdf`;
    link.setAttribute("download", "AhmedYousef.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  




  return (
    <div
      id='home'
      className=' p-2 grid grid-cols-1 max-w-[1200px] h-auto sm:h-[100vh] sm:grid-cols-3 my-[70px] gap-10 sm:mx-auto '>
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: "0" }}
        transition={{ duration: 1 }}
        className='col-span-2 px-5 flex items-center'>
        <div className=''>
          <h3 className=' text-4xl sm:text-5xl font-extrabold '>
            <span className=' primary-color'>Hello, I’m</span> <br />
          </h3>

          <p className=' text-3xl my-5 min-h-[50px]'>
            <TypeAnimation
              sequence={[
                "Ahmed Alsaid", // Types 'One'
                1000, // Waits 1s
                "Communication Engineer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Web Developer", // Types 'Three' without deleting 'Two'
                1000,
              ]}
              wrapper='span'
              cursor={false}
              repeat={Infinity}
            />
          </p>
          <p className='text-2xl mb-5'>
            I’am a front-end developer with a background in communications
            engineering and eager to build my career in web development.
          </p>

          <div className='relative  w-[90%] md:w-[60%] lg:w-[42%]  flex justify-between flex-row mt-8'>
            <div>
              <button
                onClick={toggleDropdown}
                className='bg-[#6286a1] w-32 text-white px-4 py-2 rounded-md border border-[#4A6A8B] hover:bg-[#3a556b] transition-colors flex items-center'>
                Resume
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'></path>
                </svg>
              </button>

              {isOpen && (
                <div className='absolute mt-2 w-48 bg-[#6286a1] text-white rounded-md shadow-lg'>
                  <button
                    onClick={handlePreview}
                    className='block w-full text-left px-4 py-2 hover:bg-[#3a556b] transition-colors'>
                    Preview
                  </button>
                  <button
                    onClick={handleDownload}
                    className='block w-full text-left px-4 py-2 hover:bg-[#3a556b] transition-colors'>
                    Download
                  </button>
                </div>
              )}
            </div>

            <button className=' w-32 px-6 py-2 rounded-md border  border-[#6286a1] hover:bg-[#3a556b] hover:text-white transition-colors'>
              <Link to='contact' smooth={true} duration={500} offset={-100}>
                Contact
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        className=' col-span-1  flex items-center  justify-center '>
        <div className='imageContainer  h-[350px] w-[250px] flex items-center relative '>
          <span className='absolute w-[80px] bg-primary-color h-[15px] top-[-15px] left-[0x]'></span>
          <span className='absolute w-[15px] bg-myColor h-[80px] top-[-15px] left-[-15px]'></span>
          <span className='absolute w-[80px] bg-primary-color h-[15px] right-[0px] bottom-[-15px]'></span>
          <span className='absolute w-[15px] bg-myColor h-[80px] bottom-[-15px] right-[-15px]'></span>
          <img
            id='myPhoto'
            className='object-contain w-full h-full z-20 '
            src={myImage}
            alt='Ahmed Yousef'
          />
        </div>
        {/* <div className='profile-container'>
          <img src={myImage} alt='Profile Image' />
        </div> */}
      </motion.div>
    </div>
  );
};

export default HomeContent;
