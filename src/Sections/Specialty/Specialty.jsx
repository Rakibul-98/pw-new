import idea from '../../assets/specialty/idea.svg';
import quality from '../../assets/specialty/quality.svg';
import pixel from '../../assets/specialty/pixel.svg';
import idea2 from '../../assets/specialty/idea2.svg';
import quality2 from '../../assets/specialty/quality2.svg';
import pixel2 from '../../assets/specialty/pixel2.svg';

export default function Specialty() {
  const specialties = [
    { icon: idea, icon2: idea2, alt: 'Innovative Ideas', },
    { icon: quality, icon2: quality2, alt: 'Quality Works' },
    { icon: pixel, icon2: pixel2, alt: 'Pixel Perfect', col: 'purple-400' },
  ];

  return (
    <div className="w-10/12 mx-auto">
      <div className='grid grid-cols-3'>
        {
          specialties.map((specialty, index) => (
            <div key={index} className="group flex flex-col justify-center ">
              <img
                className='h-48 group-hover:h-56 group-hover:shadow-lg'
                src={specialty.icon}
                alt={specialty.alt}
                onMouseEnter={(e) => e.currentTarget.src = specialty.icon2}
                onMouseLeave={(e) => e.currentTarget.src = specialty.icon}
              />
              <p className={`text-center font-mono font-semibold text-white p-2 opacity-0 group-hover:opacity-100 ${specialty.alt === 'Innovative Ideas' && 'bg-blue-500'}  ${specialty.alt === 'Quality Works' && 'bg-green-400'}  ${specialty.alt === 'Pixel Perfect' && 'bg-purple-400'}`}>{specialty.alt}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
