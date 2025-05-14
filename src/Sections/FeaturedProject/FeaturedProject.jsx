import { FaCode, FaCss3, FaHtml5, FaLink } from 'react-icons/fa';
import featureProject from '../../assets/featureProject/house-rent-rakibul .mp4';
import { useRef } from 'react';
import { SiNextdotjs, SiShadcnui, SiTailwindcss, SiTypescript, SiZod } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useFollowPointer } from './useFollowPointer';
import './FeaturedProject.css';

export default function FeaturedProject() {
  const pointer_ref = useRef(null);
  const { x, y } = useFollowPointer(pointer_ref);

  const tech = [
    { id: 1, icon: <FaHtml5 />, name: "HTML 5" },
    { id: 2, icon: <FaCss3 />, name: "CSS 3" },
    { id: 3, icon: <SiTypescript />, name: "TypeScript" },
    { id: 4, icon: <SiNextdotjs />, name: "Next js" },
    { id: 5, icon: <SiTailwindcss />, name: "Tailwind" },
    { id: 6, icon: <SiShadcnui />, name: "ShadCn" },
    { id: 7, icon: <SiZod />, name: "Zod" },
    { id: 8, icon: <BiLogoMongodb />, name: "MongoDb" },
  ];

  const links = [
    {
      id: 'link',
      icon: <FaLink />,
      label: 'Live link',
      address: 'https://house-finder-rakibul.vercel.app'
    },
    {
      id: 'code',
      icon: <FaCode />,
      label: 'Github link',
      address: 'https://github.com/Rakibul-98/house-rent-client.git'
    }
  ];

  return (
    <div className="min-h-screen w-[90%] mx-auto flex flex-col justify-evenly py-5">
      <div className="mx-10 mb-5">
        <h3 className="text-center uppercase font-bold md:font-extrabold text-3xl md:text-4xl md:mb-2 skills-title">
          Featured project
        </h3>
        <p className="text-center text-sm">
          &quot;You don&apos;t have to wait to be confident. Just do it and eventually <br className="hidden sm:block" /> the confidence will follow.&quot; — <i>Carrie Fisher</i>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-4 lg:px-10">
        <div className="md:col-span-2 space-y-3 text-sm lg:text-base">
          <div className=" flex justify-between items-center text-xl font-medium">
            <h3 className='text-3xl'>House Finder</h3>
            <div className="flex text-xl gap-4 z-50">
              {links.map((link, index) => (
                <a key={index} href={link.address} target="_blank" rel="noopener noreferrer">
                  <span className="text-primary hover:text-base-100" title={link.label}>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <p className="mt-1">
            House Finder is a modern, responsive platform for finding and listing homes, featuring secure authentication, seamless property search, and an intuitive user experience.
          </p>

          <h3 className="text-xl font-medium">Features:</h3>
          <ul className="list-disc list-inside">
            <li>JWT-based authentication system</li>
            <li>Database integration</li>
            <li>MongoDB database with Mongoose ODM</li>
            <li>Real-time email notifications</li>
            <li>Geo-location search functionality</li>
          </ul>

          <div className="flex flex-wrap gap-3 text-2xl mt-4">
            {tech.map((tech, index) => (
              <span key={index} title={tech.name}>
                {tech.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 w-full flex justify-center">
          <motion.div ref={pointer_ref} className="hidden md:block absolute top-1/2 left-1/2 bg-opacity-10 backdrop-blur-[1px] z-40 h-40 w-40 rounded-full custom-shadow" style={{ x, y }} />
          <video
            className="w-full max-h-[60vh] aspect-video border border-base-200 shadow-2xl object-cover z-50 rounded-lg"
            src={featureProject}
            controls
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
}
