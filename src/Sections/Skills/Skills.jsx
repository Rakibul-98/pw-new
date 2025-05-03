/* eslint-disable react/jsx-key */

import { FaBootstrap, FaCss3Alt, FaDatabase, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaNpm, FaPython, FaReact } from "react-icons/fa"
import { FaBugSlash } from "react-icons/fa6"
import { MdSecurity } from "react-icons/md"
import { SiTailwindcss, SiTypescript, SiChakraui, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase, SiNetlify, SiVercel, SiFigma, SiPostman, SiStripe, SiRadixui, SiDevdotto, SiNextdotjs, SiShadcnui, SiMongoose, SiZod, SiJsonwebtokens, SiMinutemailer } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"
import './Skills.css';
import { FiBookOpen, FiClock, FiEye, FiMessageSquare, FiRefreshCw, FiTarget, FiUsers } from "react-icons/fi"
import { GiBrain } from "react-icons/gi"


export default function Skills() {

  const skills = [
    {
      name: "Language",
      items: ["HTML", "CSS", "JavaScript", "ES6+", "TypeScript", " Python", "SQL", "Java"],
      icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiTypescript />, <FaPython />, <FaDatabase />, <FaJava />],

    },
    {
      name: "Technologies",
      items: ["React.js", "Next,js", "Tailwind CSS", "Bootstrap", "Material UI", "Shadcn", "Chakra UI", "Flowbite", "Node Mailer", "Radix UI", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      icons: [<FaReact />, <SiNextdotjs />, <SiTailwindcss />, <FaBootstrap />, <SiShadcnui />, <SiChakraui />, <SiTailwindcss />, <SiMinutemailer />, <SiRadixui />, <SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiMongoose />, <SiMysql />],
    },
    {
      name: "Tools",
      items: ["Visual Studio Code", "Git", "GitHub", "npm", "Firebase", "Netlify", "Vercel", "Figma", "Postman"],
      icons: [<VscVscode />, <FaGit />, <FaGithub />, <FaNpm />, <SiFirebase />, <SiNetlify />, <SiVercel />, <SiFigma />, <SiPostman />]
    },
    {
      name: "Others",
      items: ["Rest API", "Chrome DevTools", "React Developer Tools", "JWT", "Zod", "Stripe payment", "SSLCommerz", "Bugzilla"],
      icons: [<TbApi />, <SiDevdotto />, <MdSecurity />, <SiJsonwebtokens />, <SiZod />, <SiStripe />, <FaBugSlash />]
    },
    {
      name: "Soft Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
        "Attention to Detail",
        "Continuous Learning"
      ],
      icons: [
        <FiTarget />,
        <FiUsers />,
        <FiMessageSquare />,
        <FiClock />,
        <FiRefreshCw />,
        <GiBrain />,
        <FiEye />,
        <FiBookOpen />
      ]
    }

  ]

  return (
    <div className="w-10/12 xl:w-[1000px] mx-auto py-5">
      <div className="pb-5 border-b">
        <h3 className="text-5xl xl:text-6xl font-extrabold uppercase mb-1 skills-title">Skills</h3>
        <small className=" leading-1">&quot;Becoming is better than being. Growth happens when you focus on developing your skills and <br className="hidden md:block" /> abilities, rather than believing you are simply born with them.&quot; — <i>Carol Dweck</i></small>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="grid grid-cols-12 items-center py-1 lg:py-3 border-b">
          <h4 className="col-span-3">{skill.name}</h4>
          <div className=" col-span-9">
            {
              skill?.items?.map((item, index) => (
                <span key={index} className="m-1 lg:m-1 lg:p-1 px-4 lg:px-3 inline-block text-xs lg:text-sm border border-slate-300 leading-8 bg-base-200 hover:text-[#182a3d] glow-text cursor-default">{item}</span>
              ))
            }
          </div>
          {/* <div className="md:hidden col-span-9 py-2">
            {
              skill?.icons?.map((item, index) => (
                <span key={index} className="m-1 inline-block text-lg border border-base-100 rounded-full p-2 hover:text-[#182a3d] glow-icon cursor-default">{item}</span>
              ))
            }
          </div> */}
        </div>
      ))}
    </div>
  )
}
