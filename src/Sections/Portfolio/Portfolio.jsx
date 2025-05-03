import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projectData';
import ProjectCard from '../Projects/ProjectCard';
import { FaArrowRight } from 'react-icons/fa';


export default function Portfolio() {
    const navigate = useNavigate();
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col justify-evenly w-10/12 xl:w-[1300px] mx-auto py-5">
            <div className="mb-5 flex justify-between">
                <div>
                    <div className="flex">
                        {['p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((char, index) => (
                            <span
                                key={index}
                                className="portfolio-title text-5xl md:text-6xl uppercase font-extrabold tracking-widest"
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm mt-2">&quot;Hard work compounds like interest, and the earlier you do it, the  more <br className="hidden sm:block" /> time you have for the benefits to pay off&quot; — <i>Sam Altman</i></p>
                </div>
                <button
                    onClick={() => navigate('/projects')}
                    className=" text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 underline"
                >
                    View more Projects <FaArrowRight />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    featuredProjects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} />
                    ))
                }
            </div>

        </div>
    );
}
