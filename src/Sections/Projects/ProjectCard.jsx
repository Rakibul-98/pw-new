/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ project }) {
    const { id, images, title, overview, techs, category } = project;
    const navigate = useNavigate();

    return (
        <Tilt>
            <div
                onClick={() => navigate(`/projects/${id}`)}
                className="card w-full cursor-pointer bg-[#0a121f] hover:scale-[1.05] transition-transform shadow-2xl shadow-slate-600 h-full"
            >
                <figure className="h-40 overflow-hidden">
                    <img src={images[0]} alt={title} className="w-full h-full object-cover" />
                </figure>

                <div className="card-body py-3 px-3 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <span className="text-xs px-2 py-1 bg-white text-blue-800 uppercase font-semibold rounded-full">
                            {category}
                        </span>
                    </div>

                    <p className="text-sm">{overview}</p>

                    <div className="mt-3 flex flex-wrap gap-3 text-xl">
                        {techs.map((t, i) => (
                            <span key={i}>{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Tilt>
    );
}
