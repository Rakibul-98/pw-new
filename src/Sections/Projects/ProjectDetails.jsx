import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../data/projectData";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id == projectId);
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { images, techs, title, desc, features, challenges, strategy, futureScope, live_link, git_link } = project;

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = images[activeImageIndex];
    img.onload = () => setIsLoading(false);
  }, [activeImageIndex, images]);

  return (
    <div className="w-10/12 mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/projects')}
        className="mb-5 text-blue-400 hover:text-blue-300 font-medium"
      >
        <span className="mr-2">←</span> Back to Projects
      </button>

      <div className="relative group">
        {isLoading ? (
          <div className="w-full h-96 flex items-center justify-center bg-gray-800 rounded-md">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <img
            src={images[activeImageIndex]}
            alt={title}
            className="w-full h-64 md:h-[70vh] object-cover rounded-md"
            onLoad={() => setIsLoading(false)}
          />
        )}

        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === activeImageIndex ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-5 mt-5 md:mt-0 mb-5">
        {techs.map((TechIcon, index) => (
          <span
            key={index}
            className="text-2xl"
          >
            {TechIcon}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <div className="flex text-xs gap-2">
          <Link
            to={live_link}
            target="_blank"
            className="border-2 border-primary text-primary rounded-badge py-1 px-2 hover:bg-primary hover:text-base-100"
          >
            Live Demo
          </Link>
          <Link
            target="_blank"
            to={git_link}
            className="border-2 border-primary text-primary rounded-badge py-1 px-2 hover:bg-primary hover:text-base-100"
          >
            Source Code
          </Link>
        </div>
      </div>
      <p className="mt-2 mb-5">{desc}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
        <div>
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-500/50">
            Key Features
          </h2>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-500/50">
            Development Challenges
          </h2>
          <ul className="space-y-2">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-gray-300">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-500/50">
            Solution Strategies
          </h2>
          <ul className="space-y-2">
            {strategy.map((approach, index) => (
              <li key={index} className="flex">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-gray-300">{approach}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-500/50">
            Future Enhancements
          </h2>
          <ul className="space-y-2">
            {futureScope.map((scope, index) => (
              <li key={index} className="flex">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-gray-300">{scope}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}