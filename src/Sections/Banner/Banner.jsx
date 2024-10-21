
import { useRef } from 'react';
import { gsap } from 'gsap';
import ReactFullpage from '@fullpage/react-fullpage';
import Resume from '../../assets/Resume-rakibul.pdf';
import BannerDescription from './BannerDescription';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { AiFillMediumSquare } from 'react-icons/ai';
// import { motion } from 'framer-motion';
// import { useFollowPointer } from './useFollowPointer';


const Banner = () => {
    const imgRef = useRef(null);

    // const pointer_ref = useRef(null);
    // const { x, y } = useFollowPointer(pointer_ref);

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
                                <a key={index} className=' bg-black text-white p-[2px] hover:bg-primary' href={link.href}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-12 md:gap-5 h-screen">
                        {/* <motion.div ref={pointer_ref} className="absolute top-1/2 left-1/2 bg-slate-700 h-20 w-20 rounded-full" style={{ x, y }} /> */}
                        <div className='col-span-6 lg:col-span-7 flex items-center justify-center'>
                            <div className='w-[90%] lg:w-[75%] mx-10 md:mx-5 lg:mx-0'>
                                <BannerDescription />
                                <div className='flex gap-3'>
                                    <a className='bg-primary px-5 py-2 rounded-3xl flex items-center w-fit text-base-100 border border-primary hover:bg-base-100 hover:text-primary transition-all duration-1000' href={Resume}>Show Resume</a>

                                    <a className='px-5 py-2 rounded-3xl flex items-center w-fit text-primary border border-primary hover:bg-primary hover:text-base-100 transition-all duration-1000' href={Resume}>Download Resume </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex col-span-6 lg:col-span-5 justify-end items-end overflow-hidden">
                            <img
                                ref={imgRef}
                                className="h-[50vh] md:h-[90vh]"
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
