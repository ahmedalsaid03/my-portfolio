import {useRef } from "react";
import SectionHeader from './SectionHeader';
import emailjs from "emailjs-com";
const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_r5q3bje",
          "template_hjx4b2e",
          form.current,
          "YGYNBCI9OjPbbWg86"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    };



  return (
    <>
      <SectionHeader first='GET IN TOUCH' second='' sectionid='contact' />

      <form
        ref={form}
        onSubmit={sendEmail}
        className='container  mx-auto h-[50vh]  p-5 flex flex-col flex-wrap items-center justify-evenly'>
        <input
          required
          placeholder='Your Email'
          type='email'
          name='email'
          className='p-3 border-b-2 primary-color border-spacing-1 primary-color outline-none border-b-[#6286a1] focus:border-2 focus:rounded-xl focus:border-[#6286a1] transition-all duration-100  rounded-sm bg-transparent w-full md:w-[50%]'
        />
        <textarea
          required
          name='message'
          placeholder='Your Message'
          className='p-3 border-b-2  primary-color border-[#6286a1] focus:border-2 focus:rounded-xl outline-none rounded-sm bg-transparent w-full md:w-[50%] transition-all duration-100'></textarea>
        <button
          type='submit'
          className='bg-primary-color  text-white rounded-xl p-3 hover:bg-[#4A6A8B] w-[100px]'>
          Send
        </button>
      </form>
    </>
  );
};

export default Contact;
