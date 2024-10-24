import { useState } from "react";
import ItemModal from "./ItemModal";

export default function Portfolio() {
    const projects = [
        {
            name: "Weather Dashboard",
            description: "A web application that provides real-time weather information for any location.",
            features: [
                "Search for weather by city",
                "Display current temperature and conditions",
                "7-day weather forecast",
                "Responsive design"
            ],
            technology: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "OpenWeatherMap API"
            ],
            live_link: "https://weather-dashboard.example.com",
            github_link: "https://github.com/username/weather-dashboard"
        },
        {
            name: "Task Tracker",
            description: "A simple app to help users manage their daily tasks and to-do lists.",
            features: [
                "Add, edit, and delete tasks",
                "Mark tasks as complete",
                "Filter tasks by status",
                "User authentication"
            ],
            technology: [
                "Node.js",
                "Express",
                "MongoDB",
                "React",
                "JWT Authentication"
            ],
            live_link: "https://task-tracker.example.com",
            github_link: "https://github.com/username/task-tracker"
        },
        {
            name: "Personal Portfolio",
            description: "A personal website to showcase projects, skills, and experiences.",
            features: [
                "Responsive layout",
                "Project showcase",
                "Contact form",
                "Blog section"
            ],
            technology: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "WordPress"
            ],
            live_link: "https://portfolio.example.com",
            github_link: "https://github.com/username/personal-portfolio"
        },
        {
            name: "E-Commerce Store",
            description: "An online store platform that allows users to browse and purchase products.",
            features: [
                "Product search and filtering",
                "Shopping cart functionality",
                "User accounts and order history",
                "Payment integration"
            ],
            technology: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Stripe API"
            ],
            live_link: "https://ecommerce-store.example.com",
            github_link: "https://github.com/username/ecommerce-store"
        },
        {
            name: "Blog Platform",
            description: "A platform for users to create, read, and comment on blog posts.",
            features: [
                "User registration and profiles",
                "Create and edit blog posts",
                "Comment section",
                "Like and share functionality"
            ],
            technology: [
                "Ruby on Rails",
                "PostgreSQL",
                "Bootstrap",
                "JavaScript"
            ],
            live_link: "https://blog-platform.example.com",
            github_link: "https://github.com/username/blog-platform"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState({});
    const projectsPerSlide = 3;

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const openModal = (item) => {
        setSelectedProject(item);
        console.log(selectedProject);
        document.getElementById('project_modal').showModal();
    };

    return (
        <div className="w-10/12 mx-auto">
            <div className="bg-slate-400 h-20 mb-10">

            </div>
            <div className="h-[60vh] grid grid-cols-11 content-center place-items-center">
                {Array.from({ length: projectsPerSlide }).map((_, i) => {
                    const projectIndex = (currentIndex + i) % projects.length;
                    const isMiddle = i === 1;

                    return (
                        <div
                            key={projectIndex}
                            className={`transition-transform duration-300 $${isMiddle ? ' h-80 col-span-5' : ' col-span-3 h-60'}`}
                        >
                            <img
                                onClick={isMiddle ? () => openModal(projects[projectIndex]) : null}
                                className={`h-full w-full object-cover ${isMiddle && 'cursor-pointer'}`} src="https://i.ibb.co.com/S6FQ5gc/home-bg.png" alt="" />

                        </div>
                    );
                })}
            </div>
            <ItemModal project={selectedProject} />
            <div className="flex justify-between mt-4">
                <button onClick={prevProject}>Previous</button>
                <button onClick={nextProject}>Next</button>
            </div>
        </div>
    );
}
