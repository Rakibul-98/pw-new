import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";


export default function BannerDescription() {
    const nameTextRef = useRef(null);
    const descriptionTextRef = useRef(null);

    useEffect(() => {
        const nameText = new SplitType(nameTextRef.current, { types: 'chars' });

        const descriptionText = new SplitType(descriptionTextRef.current, { types: 'chars' });

        const tl = gsap.timeline({ repeat: -1 });

        const colors = [
            "red", "blue", "purple", "orange", "pink", "cyan", "magenta", "lime", "coral", "navy", "violet", "brown", "crimson", "indigo", "chartreuse", "salmon", "plum", "orchid", "darkblue", "olive", "skyblue"
        ];

        tl.to(nameText.chars, {
            color: gsap.utils.random(colors, true),
            opacity: 1,
            stagger: 0.2,
            yoyo:true,
            delay: 0.3
        });

        scrambleText(descriptionTextRef.current, descriptionText.chars);
    }, []);

    const scrambleText = (element, chars) => {
        const originalText = element.textContent;
        const charsSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        const totalChars = chars.length;
        const duration = 0.1;
        const revealDuration = 1.5;

        chars.forEach((char, index) => {
            const originalChar = originalText[index];
            const scrambleAnimation = () => {
                gsap.to({}, {
                    duration: duration,
                    onUpdate: () => {
                        const scrambledChar = charsSet[Math.floor(Math.random() * charsSet.length)];
                        element.textContent = element.textContent.substring(0, index) + scrambledChar + element.textContent.substring(index + 1);
                    },
                    onComplete: () => {
                        gsap.to({}, {
                            duration: revealDuration / totalChars,
                            onUpdate: () => {
                                element.textContent = element.textContent.substring(0, index) + originalChar + element.textContent.substring(index + 1);
                            }
                        });
                    }
                });
            };

            setTimeout(scrambleAnimation, index * duration * 500);
        });
    };

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
