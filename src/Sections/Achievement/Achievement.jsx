import AchievementCard from './AchievementCard';
import { BsArrowRight } from 'react-icons/bs';
import { achievements } from '../../data/achievementData';

export default function Achievement() {

  return (
    <div className=' min-h-screen w-[83%] md:w-10/12 lg:w-9/12 mx-auto flex items-center py-10 gap-5'>
      <div className="w-full">
        <div className='md:border-b border-base-100 mb-3 md:mb-5 md:pb-4'>
        <div className=' '>
          <h3 className="text-3xl font-bold mb-1 skills-title ">Work Experience & Achievements</h3>
          <small className=''>&quot;Doing the best at this moment puts you in the best place for the next moment.&quot; — <i>Oprah Winfrey</i></small>
        </div>
        <a target='_black' className='text-right flex justify-end underline items-center gap-3 hover:no-underline hover:text-primary' href="https://www.hackerrank.com/certificates/c88d2c2f40cd">View more Certifications <BsArrowRight/></a>
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
