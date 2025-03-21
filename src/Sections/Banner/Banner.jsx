
import { useRef } from 'react';
import { gsap } from 'gsap';
import ReactFullpage from '@fullpage/react-fullpage';
import Resume from '../../assets/CV_rakibul.pdf';
import BannerDescription from './BannerDescription';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { AiFillMediumSquare } from 'react-icons/ai';
import './Banner.css';
import { TbFileCv } from 'react-icons/tb';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import MouseWheel from '../MouseWheel/MouseWheel';


const Banner = () => {
    const imgRef = useRef(null);

    const handleLeave = () => {
        gsap.to(imgRef.current, { opacity: 0 });
    };

    const handleAfterLoad = (origin, destination) => {
        if (destination.index === 0) {
            gsap.fromTo(
                imgRef.current,
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
            );
        }
    };

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
        <ReactFullpage
            onLeave={handleLeave}
            afterLoad={handleAfterLoad}
            render={() => (
                <div className="relative">
                    <div className='absolute top-0 h-full'>
                        <div className='flex flex-col gap-[2px] justify-center text-xl h-full p-[1px]'>
                            {socialLinks.map((link, index) => (
                                <a key={index} className='bg-base-100 text-base-200 p-[2px] hover:bg-primary' target='_blank' href={link.href}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <MouseWheel/>
                    <div className='absolute left-5 top-5'>
                        <WeatherInfo/>
                    </div>
                    <div className="grid md:grid-cols-12 xl:w-[1200px] mx-auto h-screen">
                        <div className='w-full col-span-6 lg:col-span-7 flex items-center justify-center'>
                            <div className='ms-10 lg:ms-0 pr-10 md:pr-0 w-11/12 sm:w-9/12 md:w-full lg:w-9/12'>
                                <BannerDescription />
                                <div className='flex gap-10 flex-wrap'>
                                    <a className='hidden sm:block glow-btn px-5 py-2 bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200 whitespace-nowrap' href={Resume} target='_blank'>Show Resume</a>
                                    <a className='sm:hidden glow-btn px-8 py-2 bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200 text-2xl' href={Resume} target='_blank'><TbFileCv /> </a>

                                    <a className='hidden sm:block glow-btn px-5 py-2 bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200 whitespace-nowrap' href={Resume} download>Download Resume </a>
                                    <a className='sm:hidden glow-btn px-8 py-2 bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200 text-2xl' href={Resume} download><LiaFileDownloadSolid /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex col-span-6 lg:col-span-5 items-end overflow-hidden">
                            <img
                                ref={imgRef}
                                className="h-[50vh] md:h-[75vh] "
                                src="https://i.ibb.co/hcNfntR/top-img.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        />
    );
};

export default Banner;
