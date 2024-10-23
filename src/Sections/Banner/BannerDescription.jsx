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

        const colors = [
            "red", "blue", "purple", "orange", "pink", "cyan", "magenta", "lime", "coral", "navy", "violet", "brown", "crimson", "indigo", "chartreuse", "salmon", "plum", "orchid", "darkblue", "olive", "skyblue"
        ];

        tl.to(nameText.chars, {
            color: gsap.utils.random(colors, true),
            opacity: 1,
            stagger: 0.2,
            yoyo: true,
            delay: 0.3
        });

        gsap.set(descriptionText.words, { opacity: 0.1 });
        
        gsap.to(descriptionText.words, {
            opacity: 1,
            stagger: 0.2,
            delay: 1.5,
            duration: 0.5
        });
    }, []);

    return (
        <div>
            <div>
                <h3 className='uppercase font-semibold'>Hello I&apos;m</h3>
                <h1 ref={nameTextRef} className='text-4xl font-bold'>Md Rakibul Hasan</h1>
                <h4 className='text-xl font-medium'>MERN Developer</h4>
            </div>
            <p ref={descriptionTextRef} className='my-5'>
                As a professional full stack developer, I excel in creating high-quality web applications through seamless collaboration with designers and developers. Clients benefit from my commitment to staying current with the latest trends, continuous learning, and performance optimization, resulting in innovative, efficient, and visually appealing solutions that add significant value to their projects.
            </p>
        </div>
    );
}
