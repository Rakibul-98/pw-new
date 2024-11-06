/* eslint-disable react/prop-types */

import { FaCode, FaLink } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ItemModal({ project }) {

    return (
        <div>
            <dialog id="project_modal" className="modal">
                <div className="modal-box p-0 w-[450px] overflow-hidden">
                    <div>
                        <img className="h-64 w-full" src={project.image} alt="" />
                        <button className="z-50 absolute top-1 right-1 text-3xl text-white rounded-full" onClick={() => document.getElementById('project_modal').close()}>
                            <IoIosCloseCircleOutline />
                        </button>
                        <div className="absolute z-10 bg-rose-400 h-16 w-16 -top-5 -right-5 rounded-3xl "></div>
                    </div>
                    <hr />
                    <div className="p-5 text-sm bg-base-200">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <h3 className="font-bold text-lg">{project.title} </h3>
                                <span className="text-[9px] uppercase bg-base-100 text-base-200 px-2 rounded-badge">{project.category}</span>
                            </div>
                            <div className="flex gap-3 text-base">
                                <a className="hover:text-primary" target="_blank" href={project.live_link}><FaLink /></a>
                                <a className="hover:text-primary" target="_blank" href={project.git_link}><FaCode /></a>
                            </div>
                        </div>
                        <p className="my-2 overflow-ellipsis line-clamp-3">{project.desc}</p>
                        <div>
                            <h3 className="text-base font-medium">Features:</h3>
                            <ul className="list-inside list-disc">
                                {project?.features?.map((feature,i) => (
                                    <li key={i} className="">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-5 my-2 text-2xl">
                            {
                                project?.techs?.map((tech,i) => (
                                    <span key={i}>{tech}</span>
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
