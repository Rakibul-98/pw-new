import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function BannerDescription() {
    const descriptionTextRef = useRef(null);

    useEffect(() => {
        const descriptionText = new SplitType(descriptionTextRef.current, { types: 'words' });
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
            <img style={{ backgroundImage: "linear-gradient(to bottom, #00c6ff, #0072ff, #3a6073)" }} className="h-24 mask mask-squircle" src="https://i.ibb.co.com/KpTFJcP0/hero-img2.png" alt="" />
            <div>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text uppercase my-1" style={{ backgroundImage: "linear-gradient(to right, #00c6ff, #0072ff, #3a6073)" }}>Rakibul Hasan </h1>
                <h4 className='text-xl font-medium'>Full-Stack Developer</h4>
            </div>
            <p ref={descriptionTextRef} className='my-5 text-[15px]' >
                I excel in creating high-quality web applications with a collaborative mindset and a strong focus on performance optimization. I&apos;m committed to staying current with the latest trends, resulting in robust solutions that add significant value to every project. When I&apos;m not coding, you&apos;ll find me contributing to open-source projects or exploring new technologies.
                <span className="mt-3">
                    I Love clean code, solving puzzles, and making tech feel human. <br /> Frontend charm + backend muscle = stuff that works and feels good.
                    <i> &quot; Simplicity is the ultimate sophistication.&quot;</i>
                </span>
            </p>
        </div>
    );
}
