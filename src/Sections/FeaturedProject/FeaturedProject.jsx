import { FaCode, FaCss3, FaHtml5, FaJsSquare, FaLink, FaReact } from 'react-icons/fa';
import featureProject from '../../assets/featureProject/FeaturedProject.mp4';
import { useRef } from 'react';
import { SiFirebase, SiReactrouter, SiTailwindcss } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useFollowPointer } from './useFollowPointer';
import './FeaturedProject.css';

export default function FeaturedProject() {

  const pointer_ref = useRef(null);
  const { x, y } = useFollowPointer(pointer_ref);

  const tech = [
    {
      id: 1,
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      id: 2,
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      id: 3,
      icon: <FaJsSquare />,
      name: "JavaScript"
    },
    {
      id: 4,
      icon: <FaReact />,
      name: "React"
    },
    {
      id: 5,
      icon: <SiTailwindcss />,
      name: "Tailwind"
    },
    {
      id: 6,
      icon: <SiFirebase />,
      name: "Firebase"
    },
    {
      id: 8,
      icon: <BiLogoMongodb />,
      name: "MongoDb"
    },
    {
      id: 7,
      icon: <SiReactrouter />,
      name: "React-Router"
    },

  ];

  const links = [
    {
      id: 'link',
      icon: <FaLink />,
      label: 'Live link',
      address: 'https://grocery-shop-70585.web.app/'
    },
    {
      id: 'code',
      icon: <FaCode />,
      label: 'Github link',
      address: 'https://github.com/Rakibul-98/grocery-shop'
    }
  ];


  return (
    <div className=' h-screen xl:w-[1200px] mx-auto flex flex-col justify-evenly py-5'>
      <div className='mx-10 mb-5'>
        <h3 className='text-center uppercase font-bold md:font-extrabold  text-2xl md:text-4xl md:mb-2 feature-title'>Featured project</h3>
        <p className='text-center text-sm'>&quot;You don&apos;t have to wait to be confident.  Just do it and eventually <br className='hidden sm:block' /> the confidence will follow.&quot; — <i>Carrie Fisher</i></p>
      </div>
      <div className={`lg:px-20 sm:px-20 ps-5 pe-12 grid md:grid-cols-2 lg:gap-10 items-center`}>
        <div className={`lg:mr-10 mr-5 text-sm lg:text-base`}>
          <div className='flex justify-between items-end text-xl font-medium'>
            <h3>Grocery Shop</h3>
            <div className='flex text-xl gap-5 z-50'>
              {
                links.map((link, index) => (
                  <a key={index} href={link.address} target='_blank' rel='noopener noreferrer'>
                    <span className='text-primary hover:text-base-100' title={link.label}>{link.icon}</span>
                  </a>
                ))
              }
            </div>
          </div>
          <p className='hidden md:block mb-3 mt-1'>This is an e-commerce website for grocery products. It has a dynamic and responsive front-end design, shopping cart, and user authentication system. It can save users&apos; previous shopping activity by accessing local storage.</p>
          <h3 className='text-lg font-medium a'>Features:</h3>
          <ul className='list-disc list-inside'>
            <li>User Authentication</li>
            <li>Database integration</li>
            <li>Store cart data in local storage</li>
            <li>Product Search</li>
          </ul>
          <div className='flex gap-3 text-xl lg:2xl mt-3 lg:mt-5'>
            {
              tech.map((tech, index) => (
                <div key={index}>
                  <span title={tech.name}>{tech.icon}</span>
                </div>
              ))
            }
          </div>
        </div>
        <motion.div ref={pointer_ref} className="hidden md:block absolute top-1/2 left-1/2 bg-opacity-10 backdrop-blur-[1px] z-40 h-40 w-40 rounded-full custom-shadow" style={{ x, y }} />
        <div className={`z-50 flex justify-center mt-5 md:mt-0`}>
          <video className='h-[35vh] aspect-video lg:h-[50vh] xl:h-fit my-2 lg:my-0 border shadow-2xl' src={featureProject} controls autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}
