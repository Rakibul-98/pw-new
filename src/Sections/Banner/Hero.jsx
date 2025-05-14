import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        const code = `const developer = {
    name: 'Rakibul Hasan',
    role: 'Full-Stack Developer',
    location: 'Dhaka, Bangladesh',
    contact: '+8801728976379',
    technicalSkills: {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express', 'NestJS'],
        database: ['MongoDB']
    },
    softSkills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Critical Thinking'],
    tools: ['VS Code', 'GitHub', 'Postman', 'Figma', 'Vercel', 'Netlify']
};`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <section className="">
            <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 font-mono text-sm relative border border-blue-600">
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <span className="ml-4 text-gray-400">~/dev/portfolio_rakibul.js</span>
                </div>

                <div className="relative overflow-x-auto">
                    <button
                        onClick={copyCode}
                        className="absolute right-2 top-0 text-gray-400 hover:text-white transition-colors"
                        title="Copy code"
                        aria-label="Copy code"
                    >
                        <BiCopy />
                        {copied && (
                            <span className="absolute top-6 right-0 bg-gray-800 px-2 py-1 rounded text-xs text-green-400">
                                Copied!
                            </span>
                        )}
                    </button>

                    <div className="grid grid-cols-[30px_1fr] gap-4">
                        <div className="text-right text-gray-500 select-none">
                            {Array.from({ length: 14 }).map((_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>

                        <pre className="whitespace-pre-wrap text-white">
                            <code>
                                <span className="text-purple-400">const</span>{' '}
                                <span className="text-green-300">developer</span> = &#123;
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">name</span>:{' '}
                                <span className="text-pink-300">Rakibul Hasan</span>,
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">role</span>:{' '}
                                <span className="text-pink-300">Full-Stack Developer</span>,
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">location</span>:{' '}
                                <span className="text-pink-300">Dhaka, Bangladesh</span>,
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">contact</span>:{' '}
                                <span className="text-pink-300">+8801728976379</span>,
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">technicalSkills</span>: &#123;
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">frontend</span>:{' '}
                                [<span className="text-pink-300">React</span>,{' '}
                                <span className="text-pink-300">Next.js</span>,{' '}
                                <span className="text-pink-300">TypeScript</span>,{' '}
                                <span className="text-pink-300">Tailwind CSS</span>],
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">backend</span>:{' '}
                                [<span className="text-pink-300">Node.js</span>,{' '}
                                <span className="text-pink-300">Express</span>],
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">database</span>:{' '}
                                [<span className="text-pink-300">MongoDB</span>],
                                <br />
                                &nbsp;&nbsp;&#125;,
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">softSkills</span>: [<span className="text-pink-300">Problem Solving</span>,{' '}
                                <span className="text-pink-300">Team Collaboration</span>,{' '}
                                <span className="text-pink-300">Communication</span>,{' '}
                                <span className="text-pink-300">Critical Thinking</span>],
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-300">tools</span>: [<span className="text-pink-300">VS Code</span>,{' '}
                                <span className="text-pink-300">GitHub</span>,{' '}
                                <span className="text-pink-300">Postman</span>,{' '}
                                <span className="text-pink-300">Figma</span>,{' '}
                                <span className="text-pink-300">Vercel</span>,{' '}
                                <span className="text-pink-300">Netlify</span>]
                                <br />
                                &#125;;
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="mt-6 text-green-400">
                    <span className="text-white">$ </span>
                    <Typewriter
                        words={[
                            'npm run dev',
                            'git push origin main',
                            'echo "Open to new opportunities"',
                            'npm start portfolio',
                            'echo "Let\'s build something amazing!"'
                        ]}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
