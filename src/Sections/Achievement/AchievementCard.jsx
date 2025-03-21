/* eslint-disable react/prop-types */
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';


export default function AchievementCard({achievement}) {
    const [activeService, setActiveService] = useState(null);

    const handleCardClick = (id) => {
        setActiveService(activeService === id ? null : id);
      };

    return (
        <Tilt>
            <div
                onClick={() => handleCardClick(achievement.id)}
                className={`h-[150px] md:h-[200px] rounded-lg shadow-xl cursor-pointer relative overflow-hidden bg-base-100 text-base-200`}>
                <div
                    className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 ${activeService === achievement.id ? 'translate-x-[-100%]' : 'translate-x-0'
                        }`}
                >
                    <img src={achievement.imgSrc} alt={achievement.year} />
                </div>
                <div
                    className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-transform duration-500 ${activeService === achievement.id ? 'translate-x-0' : 'translate-x-[100%]'}`}
                >
                    <h3 className='text-lg md:hidden font-medium'>{achievement.title}</h3>
                    <p className="p-3 hidden text-sm md:block">{achievement.description}</p>
                </div>
            </div>
        </Tilt>
    )
}
