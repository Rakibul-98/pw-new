import idea from '../../assets/specialty/idea.svg';
import quality from '../../assets/specialty/quality.svg';
import pixel from '../../assets/specialty/pixel.svg';
import idea2 from '../../assets/specialty/idea2.svg';
import quality2 from '../../assets/specialty/quality2.svg';
import pixel2 from '../../assets/specialty/pixel2.svg';
import './Specialty.css';
import Tilt from 'react-parallax-tilt';

export default function Specialty() {

  const specialties = [
    { icon: idea, icon2: idea2, alt: 'Innovative Ideas' },
    { icon: quality, icon2: quality2, alt: 'Quality Works' },
    { icon: pixel, icon2: pixel2, alt: 'Pixel Perfect' },
  ];

  return (
    <div className="w-10/12 xl:w-[1000px] mx-auto flex md:block">
      <div className='md:mb-20 text-center flex items-center md:block'>
        <div className="flex flex-col md:flex-row justify-center">
          {['s', 'p', 'e', 'c', 'i', 'a', 'l', 't', 'y'].map((char, index) => (
            <span
              key={index}
              className="clipped-text text-5xl md:text-6xl uppercase font-extrabold tracking-widest"
            >
              {char}
            </span>
          ))}
        </div>
        <small className='hidden md:block mt-3 text-sm'>&#xFF02;People don&apos;t buy what you do; they buy why you do it.&#xFF02; <i className=' whitespace-nowrap'>— Simon Sinek</i></small>
      </div>
      <div className='grid md:grid-cols-3 gap-5 w-6/12 md:w-full mx-auto overflow-hidden'>
        {
          specialties.map((specialty, index) => (
            <Tilt key={index}>
              <div className="flex flex-col justify-center cursor-pointer">
                <img
                  className={`h-32 md:h-48 border bg-[#ecf1e3] ${specialty.alt === 'Innovative Ideas' && 'border-blue-500'}  ${specialty.alt === 'Quality Works' && 'border-green-400'}  ${specialty.alt === 'Pixel Perfect' && 'border-purple-400'}`}
                  src={specialty.icon}
                  alt={specialty.alt}
                />
                <p className={`text-center font-mono font-semibold text-base-200 p-2 ${specialty.alt === 'Innovative Ideas' && 'bg-blue-500'}  ${specialty.alt === 'Quality Works' && 'bg-green-400'}  ${specialty.alt === 'Pixel Perfect' && 'bg-purple-400'}`}>{specialty.alt}</p>
              </div>
            </Tilt>
          ))
        }
      </div>
    </div>
  );
}
