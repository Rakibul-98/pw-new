import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function BannerDescription() {
    const nameTextRef = useRef(null);
    const descriptionTextRef = useRef(null);

    useEffect(() => {
        const nameText = new SplitType(nameTextRef.current, { types: 'chars' });
        const descriptionText = new SplitType(descriptionTextRef.current, { types: 'words' });

        const tl = gsap.timeline({ repeat: -1 });

        gsap.set(nameText.chars, { opacity: 0 });


        tl.to(nameText.chars, {
            opacity: 1,
            stagger: 0.2,
        });
        tl.to(nameText.chars, {
            opacity: 0,
            stagger: -0.2,
            delay:0.5,
        });

        gsap.set(descriptionText.words, { opacity: 0.1 });

        gsap.to(descriptionText.words, {
            opacity: 1,
            stagger: 0.2,
            delay: 1,
            duration: 0.5
        });
    }, []);

    return (
        <div>
            <div>
                <h3 className='uppercase font-semibold'>Hello I&apos;m</h3>
                <h1 ref={nameTextRef} className="text-4xl font-bold text-transparent bg-clip-text uppercase my-1" style={{ backgroundImage: "linear-gradient(to right, #00c6ff, #0072ff, #3a6073, #5e6d8f, #ff6f61)" }}>Rakibul Hasan </h1>
                <h4 className='text-xl font-medium'>MERN Developer</h4>
            </div>
            <p ref={descriptionTextRef} className='my-5' >
                As a professional full stack developer, I excel in creating high-quality web applications through seamless collaboration with designers and developers. Clients benefit from my commitment to staying current with the latest trends, continuous learning, and performance optimization, resulting in innovative, efficient, and visually appealing solutions that add significant value to their projects.
            </p>
        </div>
    );
}
