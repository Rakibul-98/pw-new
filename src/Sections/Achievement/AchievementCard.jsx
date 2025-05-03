/* eslint-disable react/prop-types */
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';

export default function AchievementCard({ achievement }) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <Tilt>
            <div
                onClick={() => navigate(`/achievements/${achievement.id}`)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="h-[130px] md:h-[200px] rounded-lg shadow-xl cursor-pointer hover:scale-105 relative overflow-hidden bg-base-100 text-base-200"
            >
                <div
                    className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 ${isHovered ? 'translate-x-[-100%]' : 'translate-x-0'
                        }`}
                >
                    <img
                        src={achievement.imgSrc}
                        alt={achievement.title}
                        className="w-full h-full "
                    />
                </div>

                <div
                    className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-transform duration-500 ${isHovered ? 'translate-x-0' : 'translate-x-[100%]'
                        }`}
                >
                    <h3 className="text-lg font-medium px-2">
                        {achievement.title}
                    </h3>
                    <p className="text-sm mt-1 px-2">
                        {achievement.company} • {achievement.year}
                    </p>
                    <span className='mt-3 text-sm text-primary'>Click to show details</span>
                </div>
            </div>
        </Tilt>
    );
}