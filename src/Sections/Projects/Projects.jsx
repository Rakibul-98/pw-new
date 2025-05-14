import { projects } from '../../data/projectData';
import { useState } from "react";
import ProjectMenu from './ProjectsMenu';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(projects.map((p) => p.category))];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((proj) => proj.category === activeCategory);

    return (
        <div className="w-11/12 mx-auto">
            <ProjectMenu
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-8">
                {filteredProjects.length && (
                    filteredProjects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} />
                    ))
                )}
            </div>
        </div>
    );
}
