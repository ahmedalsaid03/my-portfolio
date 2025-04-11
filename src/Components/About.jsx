import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
const About = () => {
const containerVariants = {
    visible:{

        transition:{
            staggerChildren: 0.30,
            when:'beforeChildren'
        }
    }
}
const itemVariants={
    hidden:{opacity:0, x:'-50px'},
    visible:{opacity: 1 , x:0, transition:{duration:1}}
}
  return (
    <>
      <SectionHeader first='ABOUT ME' second='' sectionid='about' />
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        className='about-container container  mx-auto '>
        <motion.p variants={itemVariants}>
          I'm Ahmed Yousef, I have a strong passion for modern technologies and
          enhancing user experience, focusing on creating visually appealing and
          interactive interfaces that provide a seamless user journey. Equipped
          with skills in HTML, CSS, and JavaScript, along with growing expertise
          in frameworks like React, I aim to deliver flexible and innovative
          solutions that meet diverse project needs."
        </motion.p>
        <motion.div variants={itemVariants}>
          <h3 className='primary-color font-bold mb-3'>My experience</h3>
          <ul style={{ listStyleType: "square", marginLeft: "20px" }}>
            <li>
              Frontend: ReactJS, Next.js, Redux & Redux Toolkit , Bootstrap , Tailwind CSS, CSS/SCSS, HTML,
              JavaScript.
            </li>
            <li>API Management: React Router v6.4 , React Query, Context, Custom Hooks.</li>
            <li>
              Clean Code Practices: Creating reusable and maintainable
              components.
            </li>
          </ul>
        </motion.div>
        <motion.p variants={itemVariants}>
          I deliver high-quality web applications that meet and exceed client
          expectations. My skills allow me to handle projects
          comprehensively, providing efficient and scalable solutions.
        </motion.p>
        <motion.div variants={itemVariants}>
          <p>
            Ready to bring your project to life? Contact me to discuss your
            needs and how I can help.
          </p>
          <div>Let's Connect!</div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About
