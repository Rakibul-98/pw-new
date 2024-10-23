import { FaCode, FaCss3, FaHtml5, FaJsSquare, FaLink, FaReact } from 'react-icons/fa';
import featureProject from '../../assets/featureProject/organicStore.png';
import { useRef, useState } from 'react';
import { SiFirebase, SiReactrouter, SiTailwindcss } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useFollowPointer } from './useFollowPointer';

export default function FeaturedProject() {
  const [imageClicked, setImageClicked] = useState(false);

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

  const toggleClick = () => {
    setImageClicked(!imageClicked);
  };

  return (
    <div className={`relative overflow-hidden px-20 h-screen grid ${imageClicked ? 'grid-cols-2' : 'grid-cols-1'} gap-10 items-center`}>
      <div className={`z-50 mr-10 transition-all transform ${imageClicked ? 'opacity-100 delay-100 translate-x-0 duration-700' : 'opacity-0 -translate-x-1/2'}`}>
        <div className='flex justify-between items-end text-3xl'>
          <h3>Grocery Shop</h3>
          <div className='flex text-xl gap-5'>
            {
              links.map((link, index) => (
                <a key={index} href={link.address} target='_blank' rel='noopener noreferrer'>
                  <span className='text-primary hover:text-black' title={link.label}>{link.icon}</span>
                </a>
              ))
            }
          </div>
        </div>
        <p className='my-4'>This is an e-commerce website for grocery products. It has a dynamic and responsive front-end design, shopping cart, and user authentication system. It can save users&apos; previous shopping activity by accessing local storage.</p>
        <h3 className='text-2xl'>Features:</h3>
        <ul className='list-disc list-inside'>
          <li>User Authentication</li>
          <li>Private Route</li>
          <li>Database integration</li>
          <li>Store cart data in local storage</li>
          <li>Product Search</li>
          <li>Responsive Design</li>
        </ul>
        <div className='flex gap-3 text-2xl mt-5'>
          {
            tech.map((tech, index) => (
              <div key={index}>
                <span className='' title={tech.name}>{tech.icon}</span>
              </div>
            ))
          }
        </div>
      </div>
      <motion.div ref={pointer_ref} className="absolute top-1/2 left-1/2 bg-slate-500 opacity-25 shadow-2xl z-10 h-40 w-40 rounded-full" style={{ x, y }} />

      <div className={`left-1/3 transition-all duration-1000 z-50 ${imageClicked ? 'static' : 'absolute'}`}>
        <img title='click to show more' className={`duration-500 h-[50vh] border cursor-pointer ${imageClicked ? 'rotate-0 h-[60vh]' : 'rotate-[-25deg]'}`} src={featureProject} alt="" onClick={toggleClick} />
      </div>
    </div>
  );
}
