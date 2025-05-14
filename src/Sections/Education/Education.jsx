import Tilt from 'react-parallax-tilt';

export default function Education() {

    const educationData = [
        {
            title: "BSc in Computer Science & Engineering",
            duration: "2021–2025",
            outcomes: [
                "Built a solid foundation in algorithms, data structures, and software architecture.",
                "Gained hands-on experience designing and optimizing databases for scalable web apps.",
            ],
        },
        {
            title: "Next Level Web Development",
            duration: "2024",
            outcomes: [
                "Explored Next.js features—SSR, SSG, API routes—and fine-tuned app performance and SEO.",
                "Designed and implemented MongoDB schemas with proper indexing, improving query performance"
            ],
        },
        {
            title: "Redux: Beginner → Advanced",
            duration: "2021",
            outcomes: [
                "Specialized in global state management, middleware patterns, and performance tuning.",
                "Built scalable Redux architectures using Redux Toolkit and integrated with async workflows"
            ],
        },
        {
            title: "Complete Web Development",
            duration: "2021",
            outcomes: [
                "Mastered HTML5, CSS3, JavaScript, Node.js and React through real-world projects.",
                "Built full-stack applications with RESTful APIs, authentication, and responsive design."
            ],
        }

    ];

    return (
        <section className="md:min-h-screen flex items-center py-10">
            <div className='w-10/12 mx-auto flex md:block'>
                <div className=' text-center flex items-center md:block'>
                    <div className="flex flex-col md:flex-row justify-center">
                        {['e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'].map((char, index) => (
                            <span
                                key={index}
                                className="education-title text-5xl uppercase font-extrabold tracking-widest"
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                    <small className='hidden md:block mt-3 text-sm'>&#xFF02;The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.&#xFF02; <i className=' whitespace-nowrap'>— Brian Herbert

                    </i></small>
                </div>
                <div className="mt-5 mb-10 text-white hidden md:block">
                    <h4 className="text-primary text-lg font-bold mb-2">What&apos;s Next?</h4>
                    <p className="text-sm max-w-xl text-base-100">
                        Currently exploring Machine Learning and AI integrations into full-stack projects. Excited to dive deeper into scalable architecture and DevOps!
                    </p>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-5 md:gap-5 justify-items-center">
                        {educationData.map((edu, index) => (
                            <Tilt key={index}>
                                <div
                                    className={`h-full w-[90%] md:w-full mx-auto rounded-lg bg-[#1e293b] border border-blue-600 p-4`}>
                                    <h3 className="text-lg font-semibold text-blue-400 mb-5">{edu.title} <span className="text-sm text-white"> - {edu.duration}</span></h3>

                                    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm xl:text-md text-white">
                                        {edu.outcomes.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Tilt>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
