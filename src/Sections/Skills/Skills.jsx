import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGithub, FaGit,
  FaReact,
  FaNpm
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiChakraui, SiShadcnui, SiFirebase,
  SiNetlify, SiVercel, SiMongodb, SiMongoose, SiZod, SiStripe, SiPostman,
  SiJsonwebtokens, SiExpress, SiRadixui, SiDevdotto,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";
import {
  VscVscode
} from "react-icons/vsc";
import {
  TbApi
} from "react-icons/tb";
import './Skills.css';

export default function Skills() {
  const categorizedSkills = [
    {
      title: "Core Skills",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Chakra UI", icon: <SiChakraui /> },
        { name: "Shadcn", icon: <SiShadcnui /> },
        { name: "Flowbite", icon: <SiTailwindcss /> },
        { name: "Radix UI", icon: <SiRadixui /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
        { name: "Zod", icon: <SiZod /> },
        { name: "REST API", icon: <TbApi /> },
        { name: "Stripe", icon: <SiStripe /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "npm", icon: <FaNpm /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Chrome DevTools", icon: <SiDevdotto /> },
      ]
    }
  ];

  return (
    <div className="w-10/12 mx-auto py-5">
      <div className="pb-3 border-b border-base-100">
        <h3 className="text-5xl xl:text-6xl font-extrabold uppercase mb-1 skills-title">Skills</h3>
        <p className="leading-1">
          &quot;Becoming is better than being. Growth happens when you focus on developing your skills and{" "}
          <br className="hidden md:block" /> abilities, rather than believing you are simply born with them.&quot; —
          <i> Carol Dweck</i>
        </p>
      </div>

      {categorizedSkills.map((category, index) => (
        <div key={index} className="mt-5">
          <h4 className="text-2xl font-semibold mb-3">{category.title}</h4>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4">
            {category.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center aspect-square border border-base-100 bg-base-200 hover:text-[#182a3d] glow-text cursor-default  h-full px-[2px]"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span className="text-sm text-center line-clamp-1">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
