import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const codeLines = [
        'const developer = {',
        "  name: 'Rakibul Hasan',",
        "  role: 'Full stack Developer',",
        "  skills: ['React', 'Next', 'Node', 'MongoDB']",
        '};',
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(codeLines.join('\n'));
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
                    <span className="ml-4 text-gray-400">~/dev/portfolio_rakibul.jsx</span>
                </div>

                <div className="relative overflow-x-auto">
                    <button
                        onClick={copyCode}
                        className="absolute right-2 top-0 text-gray-400 hover:text-white"
                        title="Copy code"
                    >
                        <BiCopy />
                        {copied && (
                            <span className="absolute top-6 right-0 bg-gray-800 px-2 py-1 rounded text-xs">
                                Copied!
                            </span>
                        )}
                    </button>

                    <div className="grid grid-cols-[30px_1fr] gap-4">
                        <div className="text-right text-gray-500 select-none">
                            {codeLines.map((_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>

                        <pre className="whitespace-pre-wrap text-white">
                            <code>
                                <span className="text-purple-400">const</span> <span className="text-green-300">developer</span> = &#123;<br />
                                &nbsp;&nbsp;<span className="text-yellow-300">name</span>: <span className="text-pink-300">&apos;Rakibul Hasan&apos;</span>,<br />
                                &nbsp;&nbsp;<span className="text-yellow-300">role</span>: <span className="text-pink-300">&apos;Full-Stack Developer&apos;</span>,<br />
                                &nbsp;&nbsp;<span className="text-yellow-300">skills</span>: [<span className="text-pink-300" title="Frontend">React</span>, <span className="text-pink-300" title="Frontend">Next</span>, <span className="text-pink-300" title="Backend">Node</span>, <span className="text-pink-300" title="Database">MongoDB</span>]<br />
                                &#125;;
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="mt-6 text-green-400">
                    <span className="text-white">$ </span>
                    <Typewriter
                        words={['npm run dev', 'git push origin main', 'echo "Ready to be hired 🚀"']}
                        loop={true}
                        cursor
                        cursorStyle='█'
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
