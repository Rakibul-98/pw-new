/* eslint-disable react/prop-types */
import { AiOutlineApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FiHome, FiGrid, FiMonitor } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const iconMap = {
  All: <FiGrid />,
  Next: <RiNextjsLine />  ,
  API: <AiOutlineApi />,
  JavaScript: <IoLogoNodejs />,
  React: <FaReact />,
  UI: <FiMonitor />,
};

export default function ProjectMenu({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex justify-center py-6">
      <div className="flex items-center px-2 py-1 rounded-full shadow-xl space-x-3 border border-primary">
        
        <Link to="/" className="p-2 rounded-full transition text-primary">
          <FiHome className="text-xl" />
        </Link>

        <div className="border-l h-6 border-gray-300" />

        <div className="flex items-center space-x-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all
                ${activeCategory === cat
                  ? "bg-primary text-white font-semibold"
                  : "text-white hover:bg-primary"
                }`}
            >
              <span className="text-lg">{iconMap[cat] ?? <FiGrid />}</span>
              <span className="hidden sm:inline text-sm">{cat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
