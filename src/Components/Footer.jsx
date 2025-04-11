import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  const date = new Date();
  // date.getUTCFullYear

  const year = date.getFullYear();

  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-center '>
      <div className='flex flex-row items-center mb-3 mx-3 md:mb-0'>
        <a
          className='col-span-1 flex flex-col flex-wrap mx-3'
          href='https://www.linkedin.com/in/ahmedalsaid03/'
          target='_blank'
          rel='noopener noreferrer'>
          <LinkedInIcon fontSize='large' />
        </a>
        <a
          className='col-span-1 flex flex-col flex-wrap mx-3'
          href='https://github.com/ahmedalsaid03'
          target='_blank'
          rel='noopener noreferrer'>
          <GitHubIcon fontSize='large' />
        </a>
        <a
          className='col-span-1 flex flex-col flex-wrap mx-3'
          href='https://wa.me/+905013350511'
          target='_blank'
          rel='noopener noreferrer'>
          <WhatsAppIcon fontSize='large' />
        </a>
      </div>

      <div className='flex justify-center text-xl primary-color '>
        &copy;AHMED ALSAID {year}{" "}
      </div>
    </div>
  );
};

export default Footer;
