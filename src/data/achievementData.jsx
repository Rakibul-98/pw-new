import ph from '../assets/certificate/ph.jpg';
import systemicAltruism from '../assets/certificate/systemic altruism.jpg';
import phPdf from '../assets/certificate/certificate PH.pdf';
import systemicAltruismPdf from '../assets/certificate/Rakibul_Hasan_Hired_Certificate.pdf';
import web from '../assets/certificate/frontend.jpg';
import soft from '../assets/certificate/softwaredev.jpg';
// import js from '../assets/certificate/js.jpg';
import EIT from '../assets/certificate/EIT.jpg';
import api from '../assets/certificate/api.jpg';

export const achievements = [
    {
        id: 7,
        title: "Certificate of Selection",
        company: "Express IT",
        year: "2025",
        duration: "7 months",
        role: "Full Stack Developer",
        description: "During this internship, I led the architecture and development of microservice-based full-stack solutions, emphasizing scalable backend logic, secure authentication, and seamless front-end integration. My contributions directly enhanced performance and user experience in live applications.",
        technologies: ["Node.js", "Express.js", "React", "MongoDB", "JWT"],
        contributions: [
            "Architected full-stack microservices using Node.js and Express.js, integrating React frontends with MongoDB analytics modules",
            "Redesigned user authentication flows with JWT and React Context, reducing token refresh failures by 50%",
            "Maintained session integrity in MongoDB while enhancing security protocols"
        ],
        learningOutcomes: [
            "Deepened knowledge of scalable architecture and microservices",
            "Enhanced security best practices with JWT and session handling",
            "Strengthened collaboration in a fast-paced agile team"
        ],
        imgSrc: EIT,
        // pdf: expressITPdf,
        imgAlt: "Express IT Certificate",
        verificationLink: "https://drive.google.com/file/d/1p1RShs_3hCsf_iHEAGEoDCLqvzkkVIfw/view"
    },    
    {
        id: 1,
        title: "Certificate of Selection",
        company: "Systemic Altruism",
        year: '2024',
        duration: '3 months',
        role: 'Web Development Intern',
        description: 'This internship provided hands-on experience in real-world web development projects, enhancing skills in front-end and back-end technologies. Recognized for dedication and technical proficiency, this role marked a significant step in my journey as a developer.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        contributions: [
            'Developed 3+ responsive web applications from scratch',
            'Implemented RESTful APIs for data management',
            'Optimized application performance reducing load time by 40%'
        ],
        learningOutcomes: [
            'Gained practical experience in full-stack development',
            'Improved problem-solving skills in real-world scenarios',
            'Learned agile development methodologies'
        ],
        imgSrc: systemicAltruism,
        pdf: systemicAltruismPdf,
        imgAlt: 'Systemic Altruism Certificate',
    },
    {
        id: 2,
        title: "Certificate of Completion with Excellence",
        company: "Programming Hero",
        year: '2021',
        duration: '6 months',
        role: 'Advanced Web Development Student',
        description: 'Awarded the Certificate of Completion with Excellence from Programming Hero for ranking in the top 5%. This intensive program covered core technologies including JavaScript, HTML, CSS, and React. Recognized for hard work, dedication, and quick learning, consistently meeting deadlines and exceeding expectations.',
        technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Firebase'],
        contributions: [
            'Completed 50+ coding challenges with 100% success rate',
            'Built 5 portfolio projects demonstrating full-stack skills',
        ],
        learningOutcomes: [
            'Mastered modern JavaScript concepts (ES6+)',
            'Developed strong foundations in React framework',
            'Gained experience in team coding projects'
        ],
        imgSrc: ph,
        pdf: phPdf,
        imgAlt: 'Programming Hero Certificate',
    },
    {
        id: 3,
        title: "Frontend Developer (React) Certification",
        company: "HackerRank",
        year: '2025',
        duration: '2 hours',
        role: 'Certified Developer',
        description: "This certification assesses a candidate's ability to design, build, and debug web applications. It tests skills in front-end development (HTML, CSS, JavaScript, frameworks like React). Candidates solve real-world problems, demonstrating proficiency in full-stack development, version control (Git), and responsive design.",
        technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'Responsive Design'],
        skillsTested: [
            'Component-based architecture',
            'State management',
            'Performance optimization',
            'Cross-browser compatibility'
        ],
        learningOutcomes: [
            'Validated React proficiency through standardized testing',
            'Improved problem-solving under time constraints',
            'Enhanced understanding of React best practices'
        ],
        imgSrc: web,
        pdf: "https://www.hackerrank.com/certificates/iframe/c88d2c2f40cd",
        imgAlt: 'HackerRank React Certificate',
    },
    {
        id: 4,
        title: "Software Engineer Certification",
        company: "HackerRank",
        year: '2025',
        duration: '3 hours',
        role: 'Certified Software Engineer',
        description: 'This certification validates core software engineering skills, including problem-solving, SQL for database management, and REST API design. Candidates demonstrate their ability to write efficient code, debug, and build scalable solutions. It highlights readiness for software engineering roles.',
        technologies: ['SQL', 'REST APIs', 'Data Structures', 'Algorithms', 'System Design'],
        skillsTested: [
            'Database design and optimization',
            'API endpoint design',
            'Time complexity analysis',
            'System architecture'
        ],
        learningOutcomes: [
            'Strengthened database management skills',
            'Improved API design patterns knowledge',
            'Enhanced system architecture understanding'
        ],
        imgSrc: soft,
        pdf: "https://www.hackerrank.com/certificates/iframe/a985c1c99863",
        imgAlt: 'HackerRank Software Engineer Certificate',
    },
    // {
    //     id: 5,
    //     title: "JavaScript (Intermediate) Certification",
    //     company: "HackerRank",
    //     year: '2025',
    //     duration: '90 minutes',
    //     role: 'Certified JavaScript Developer',
    //     description: 'This certification assesses intermediate JavaScript skills, including design patterns, memory management, concurrency models, and event loops. Candidates demonstrate their ability to write efficient, scalable code and handle complex programming challenges.',
    //     technologies: ['JavaScript', 'ES6+', 'Design Patterns', 'Memory Management'],
    //     skillsTested: [
    //         'Advanced JavaScript concepts',
    //         'Asynchronous programming',
    //         'Closures and scope management',
    //         'Prototypal inheritance'
    //     ],
    //     learningOutcomes: [
    //         'Deepened understanding of JavaScript internals',
    //         'Improved asynchronous code handling',
    //         'Mastered advanced design patterns'
    //     ],
    //     imgSrc: js,
    //     pdf: "https://www.hackerrank.com/certificates/iframe/f8462a81ec79",
    //     imgAlt: 'HackerRank JavaScript Certificate',
    //     verificationLink: 'https://www.hackerrank.com/certificates/f8462a81ec79'
    // },
    {
        id: 6,
        title: "REST API (Intermediate) Certification",
        company: "HackerRank",
        year: '2025',
        duration: '90 minutes',
        role: 'Certified API Developer',
        description: 'This certification validates skills in working with REST APIs, including retrieving data using parameters, handling pagination, and processing API responses. Candidates demonstrate their ability to interact with APIs effectively and manage data flow.',
        technologies: ['REST APIs', 'HTTP Methods', 'JSON', 'Authentication', 'Pagination'],
        skillsTested: [
            'API endpoint consumption',
            'Error handling',
            'Authentication flows',
            'Data transformation'
        ],
        learningOutcomes: [
            'Improved API integration skills',
            'Enhanced understanding of authentication methods',
            'Better error handling strategies'
        ],
        imgSrc: api,
        pdf: "https://www.hackerrank.com/certificates/iframe/41e7032c2956",
        imgAlt: 'HackerRank API Certificate',
    }
];