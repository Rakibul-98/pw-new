
import Resume from '../../assets/resume_rakibul_hasan.pdf';
import BannerDescription from './BannerDescription';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { AiFillMediumSquare } from 'react-icons/ai';
import './Banner.css';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import MouseWheel from '../MouseWheel/MouseWheel';
import Hero from './Hero';


const Banner = () => {

    const socialLinks = [
        {
            href: 'https://github.com/Rakibul-98',
            icon: <IoLogoGithub />,
        },
        {
            href: 'https://www.linkedin.com/in/rakibul-98/',
            icon: <IoLogoLinkedin />,
        },
        {
            href: 'https://www.facebook.com/rakibul.rupom2001',
            icon: <IoLogoFacebook />,
        },
        {
            href: 'https://rakibul-98.medium.com/',
            icon: <AiFillMediumSquare />,
        }
    ];

    return (
        <div className="relative flex items-center min-h-screen py-20">
            <div className='absolute top-0 h-full'>
                <div className='flex flex-col gap-[2px] justify-center text-xl h-full p-[1px]'>
                    {socialLinks.map((link, index) => (
                        <a key={index} className='bg-base-100 text-base-200 p-[2px] hover:bg-primary' target='_blank' href={link.href}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
            <MouseWheel />
            <div className='absolute left-5 top-5'>
                <WeatherInfo />
            </div>
            <div className="flex flex-col lg:flex-row w-10/12 mx-auto gap-10 items-center">
                <div className='w-full lg:w-1/2'>
                    <div className='px-4 lg:px-0'>
                        <BannerDescription />
                        <div className='flex gap-2 sm:gap-4 lg:mt-10'>
                            <a className='glow-btn px-4 py-2 bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200 whitespace-nowrap text-xs sm:text-base'
                                href={Resume}
                                target='_blank'
                                rel="noopener noreferrer">
                                Show Resume
                            </a>

                            <a className='glow-btn px-4 py-2 bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200 whitespace-nowrap text-xs sm:text-base'
                                href={Resume}
                                download>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 px-4 lg:px-0'>
                    <Hero />
                </div>
            </div>
        </div>
    );
};

export default Banner;
