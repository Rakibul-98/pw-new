/* eslint-disable react/prop-types */

import { FaCode, FaLink } from "react-icons/fa";

export default function ItemModal({ item }) {

    return (
        <div>
            <dialog id="project_modal" className="modal">
                <div className="modal-box p-0 w-[400px] overflow-hidden">
                    <img className="h-56 bg-slate-400" src={item.image} alt="" />
                    <div className="p-2 text-sm">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <div className="flex gap-3">
                                <a target="_blank" href={item.live}><FaLink /></a>
                                <a target="_blank" href={item.github}><FaCode /></a>
                            </div>
                        </div>
                        <p className="py-2">{item.description}</p>
                        <div>
                            <h3 className="text-base font-medium">Features:</h3>
                            <ul className="list-inside list-disc">
                                {item?.features?.map((feature) => (
                                    <li key={feature.id} className="">
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-5 my-2">
                            {
                                item?.technology?.map((tech) => (
                                    <span key={tech.id}>{tech.text}</span>
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
