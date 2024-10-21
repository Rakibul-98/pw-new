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
    <div className="absolute top-0 transform translate-y-1/2 right-1 text-center z-50">
      <ul className="flex flex-col">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-4 text-xl transition-colors ${currentSection === section.id ? 'text-primary' : 'text-black hover:text-primary'}`}
            onClick={() => handleClick(section)}
          >
            {section.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
