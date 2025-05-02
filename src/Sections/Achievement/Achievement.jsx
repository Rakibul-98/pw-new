import ph from '../../assets/certificate/ph.jpg';
import systemicAltruism from '../../assets/certificate/systemic altruism.jpg';
import phPdf from '../../assets/certificate/certificate PH.pdf';
import systemicAltruismPdf from '../../assets/certificate/Rakibul_Hasan_Hired_Certificate.pdf';
import AchievementCard from './AchievementCard';
import web from '../../assets/certificate/frontend.jpg';
import soft from '../../assets/certificate/softwaredev.jpg';
import js from '../../assets/certificate/js.jpg';
import api from '../../assets/certificate/api.jpg';
import { BsArrowRight } from 'react-icons/bs';


export default function Achievement() {

  const achievements = [
    {
      id: 1,
      title:"Certificate of Selection",
      year: '2024',
      description: 'This internship provided hands-on experience in real-world web development projects, enhancing skills in front-end and back-end technologies. Recognized for dedication and technical proficiency, this role marked a significant step in my journey as a developer.',
      imgSrc: systemicAltruism,
      pdf: systemicAltruismPdf,
      imgAlt: 'certificate2',
    },
    {
      id: 2,
      title:"Certificate of Completion with Excellence",
      year: '2021',
      description: 'Awarded the Certificate of Completion with Excellence from Programming Hero for ranking in the top 5%. This intensive program covered core technologies including JavaScript, HTML, CSS, and React. Recognized for hard work, dedication, and quick learning, consistently meeting deadlines and exceeding expectations.',
      imgSrc: ph,
      pdf: phPdf,
      imgAlt: 'certificate1',
    },
    {
      id: 3,
      title:"Frontend Developer (React) - It covers topics like React, CSS, and JavaScript.",
      year: '2025',
      description: "This certification assesses a candidate's ability to design, build, and debug web applications. It tests skills in front-end development (HTML, CSS, JavaScript, frameworks like React). Candidates solve real-world problems, demonstrating proficiency in full-stack development, version control (Git), and responsive design.",
      imgSrc: web,
      pdf: "https://www.hackerrank.com/certificates/iframe/c88d2c2f40cd",
      imgAlt: 'certificate3',
    },
    {
      id: 4,
      title:"Software Engineer - it covers topics like Problem solving, SQL, and REST API.",
      year: '2025',
      description: 'This certification validates core software engineering skills, including problem-solving, SQL for database management, and REST API design. Candidates demonstrate their ability to write efficient code, debug, and build scalable solutions. It highlights readiness for software engineering roles.',
      imgSrc: soft,
      pdf: "https://www.hackerrank.com/certificates/iframe/a985c1c99863",
      imgAlt: 'certificate4',
    },
    {
      id: 5,
      year: '2025',
      title:"JavaScript (Intermediate)",
      description: 'This certification assesses intermediate JavaScript skills, including design patterns, memory management, concurrency models, and event loops. Candidates demonstrate their ability to write efficient, scalable code and handle complex programming challenges.',
      imgSrc: js,
      pdf: "https://www.hackerrank.com/certificates/iframe/f8462a81ec79",
      imgAlt: 'certificate5',
    },
    {
      id: 6,
      year: '2025',
      title:" Rest API (Intermediate) - It covers topics like getting data from an API.",
      description: 'This certification validates skills in working with REST APIs, including retrieving data using parameters, handling pagination, and processing API responses. Candidates demonstrate their ability to interact with APIs effectively and manage data flow. ',
      imgSrc: api,
      pdf: "https://www.hackerrank.com/certificates/iframe/41e7032c2956",
      imgAlt: 'certificate6',
    },

  ];

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
