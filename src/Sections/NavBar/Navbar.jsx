/* eslint-disable react/prop-types */

export default function Navbar({ currentSection, sections, onSectionChange }) {


  const handleClick = (section) => {
    onSectionChange(section.id);
    const sectionIndex = sections.indexOf(section);
    if (sectionIndex !== -1) {
      window.fullpage_api.moveTo(sectionIndex + 1);
    }
  };

  return (
    <div className="absolute top-0 h-full right-0 z-40">
      <ul className="flex flex-col justify-center h-full">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-4 text-xl transition-colors ${currentSection === section.id ? 'text-primary' : 'text-base-100 hover:text-primary'}`}
            onClick={() => handleClick(section)}
          >
            {section.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
