/* eslint-disable react/prop-types */


export default function Skills() {

  const skills = [
    {
      name: "Language",
      items: ["HTML", "CSS", "JavaScript", "ES6+", "TypeScript", " Python", "SQL", "Java"],
    },
    {
      name: "Technologies",
      items: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "Flowbite", "Radix UI", "Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      name: "Tools",
      items: ["Visual Studio Code", "Git", "GitHub", "npm", "Firebase", "Netlify", "Vercel", "Figma", "Postman"],
    },
    {
      name: "Others",
      items: ["Rest API", "Chrome DevTools", "React Developer Tools", "JWT", "Stripe payment", "SSLCommerz", "Bugzilla"],
    },
    
    
  ]

  return (
    <div className="w-9/12 mx-auto">
      <h3 className="text-2xl font-medium pb-5 border-b">Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="grid grid-cols-5 items-center py-2 border-b">
          <h4>{skill.name}</h4>
          <div className="col-span-4 py-2">
            {
              skill.items.map((item, index) => (
                <span key={index} className="m-2 px-3 inline-block text-sm bg-slate-200 leading-10">{item}</span>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  )
}
