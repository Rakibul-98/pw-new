import AchievementCard from './AchievementCard';
import { BsArrowRight } from 'react-icons/bs';
import { achievements } from '../../data/achievementData';
import { Link } from 'react-router-dom';

export default function Achievement() {

  return (
    <div className=' min-h-screen w-10/12 mx-auto flex items-center py-10 gap-5'>
      <div className="w-full">
        <div className='mb-3 md:mb-5'>
          <div className=' '>
            <h3 className="text-5xl font-bold mb-1 skills-title ">Work Experience & Achievements</h3>
            <p className=''>&quot;Doing the best at this moment puts you in the best place for the next moment.&quot; — <i>Oprah Winfrey</i></p>
          </div>
          <div className='flex justify-end'>
            <Link target='_black' className='text-right flex justify-end underline items-center gap-3 hover:no-underline hover:text-primary w-fit' to="https://www.hackerrank.com/certificates/c88d2c2f40cd">View more Certifications <BsArrowRight /></Link>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 '>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}
