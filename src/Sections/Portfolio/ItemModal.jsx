/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { FaCode, FaLink } from "react-icons/fa";

export default function ItemModal({ project }) {

    useEffect(() => {
        document.body.classList.remove('overflow-hidden');
    }, []);

    return (
        <div>
            <dialog id="project_modal" className="modal">
                <div className="modal-box p-0 w-[450px] overflow-hidden">
                    <img className="h-56 bg-slate-400" src={project.image} alt="" />
                    <div className="p-2 text-sm">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">{project.name}</h3>
                            <div className="flex gap-3">
                                <a target="_blank" href={project.live}><FaLink /></a>
                                <a target="_blank" href={project.github}><FaCode /></a>
                            </div>
                        </div>
                        <p className="py-2">{project.description}</p>
                        <div>
                            <h3 className="text-base font-medium">Features:</h3>
                            <ul className="list-inside list-disc">
                                {project?.features?.map((feature) => (
                                    <li key={feature} className="">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-5 my-2">
                            {
                                project?.technology?.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
