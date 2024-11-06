import ph from '../../assets/certificate/ph.jpg';
import systemicAltruism from '../../assets/certificate/systemic altruism.jpg';
import phPdf from '../../assets/certificate/certificate PH.pdf';
import systemicAltruismPdf from '../../assets/certificate/Rakibul_Hasan_Hired_Certificate.pdf';


export default function Achievement() {

  const achievements = [
    {
      year: '2024',
      description: 'This internship provided hands-on experience in real-world web development projects, enhancing skills in front-end and back-end technologies. Recognized for dedication and technical proficiency, this role marked a significant step in my journey as a developer.',
      imgSrc: systemicAltruism,
      pdf: systemicAltruismPdf,
      imgAlt: 'certificate2',
    },
    {
      year: '2021',
      description: 'Awarded the Certificate of Completion with Excellence from Programming Hero for ranking in the top 5%. This intensive program covered core technologies including JavaScript, HTML, CSS, and React. Recognized for hard work, dedication, and quick learning, consistently meeting deadlines and exceeding expectations.',
      imgSrc: ph,
      pdf: phPdf,
      imgAlt: 'certificate1',
    },

  ];

  return (
    <div className=' h-screen w-[85%] md:w-10/12 lg:w-9/12 xl:w-[1000px] mx-auto flex items-center py-5'>
      <div className="">
        <div className='mb-3 md:mb-0 md:pb-4 md:border-b border-base-100'>
          <h3 className="text-2xl md:text-3xl font-semibold mb-1 ">Work Experience & Achievements</h3>
          <small className='hidden md:block'>&quot;Doing the best at this moment puts you in the best place for the next moment.&quot; — <i>Oprah Winfrey</i></small>
        </div>
        <div className='mr-3 md:mr-0'>
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center px-2 md:py-2 border border-base-100 md:border-0 md:border-b mb-3 md:mb-0">
              <h4 className='achievement-title w-[15%] my-1 font-bold md:font-extrabold md:text-3xl lg:text-4xl'>{achievement.year}</h4>
              <div className='md:w-[85%] flex flex-col md:flex-row items-center gap-2'>
                <p className=" sm:w-[90%] md:w-[60%] text-sm xl:text-base ">{achievement.description}</p>
                <a
                  className='relative w-[30%] sm:w-[40%] flex justify-end group hover:bg-base-200'
                  target="_blank"
                  rel='noopener noreferrer'
                  href={achievement.pdf}
                >
                  <img
                    className="h-12 sm:h-32 md:h-36 lg:h-40 xl:h-44 w-full border group-hover:opacity-30"
                    src={achievement.imgSrc}
                    alt={achievement.imgAlt}
                  />
                  <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-sm md:text-xl opacity-0 group-hover:opacity-100 text-center'>
                    Verify Certificate
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
