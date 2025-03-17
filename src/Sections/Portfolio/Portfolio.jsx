/* eslint-disable react/jsx-key */
import { useState } from "react";
import ItemModal from "./ItemModal";
import { TbApi, TbSquareArrowLeftFilled, TbSquareArrowRightFilled } from "react-icons/tb";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiDaisyui, SiFirebase, SiGooglemaps, SiJavascript, SiMongodb, SiNetlify, SiNextdotjs, SiReacthookform, SiRender, SiShadcnui, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { BsRouter } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

export default function Portfolio() {

    const projects = [
        {
            id: 17,
            category: "Next js",
            image: "https://i.ibb.co.com/Lzf71z7w/hr-banner.png",
            title: "House Finder",
            desc: "House Finder is a modern, responsive platform for finding and listing homes.",
            features: [
                "Role Based Authentication",
                "Database Integration",
                "Email Notification",
            ],
            techs: [<SiNextdotjs />, <SiTypescript/>, <SiTailwindcss />, <SiShadcnui />, <SiMongodb/>, <SiRender />],
            live_link: "https://house-rent-client.onrender.com",
            git_link: "https://github.com/Rakibul-98/house-rent-client.git",
        },
        {
            id: 16,
            category: "React",
            image: "https://i.ibb.co.com/wZddPbw4/Screenshot-2025-02-24-203853.png",
            title: "Bike Solution",
            desc: "A modern, responsive e-commerce platform for purchasing bikes.",
            features: [
                "Rolebased Authentication",
                "Payment Gateway Integration",
                "User dashboard based on role",
            ],
            techs: [<FaReact />, <SiTypescript/>, <SiTailwindcss />, <SiDaisyui />, <SiReacthookform/>, <SiVercel />],
            live_link: "https://bike-solution-rakibul.vercel.app/",
            git_link: "https://github.com/Rakibul-98/bike-store-client.git",
        },
        {
            id: 15,
            category: "React",
            image: "https://i.ibb.co.com/PxjKxZQ/task-tracker.jpg",
            title: "Task Tracker",
            desc: "This is an online task tracker. Here I added a database to load the task details. This website is my ongoing project.",
            features: [
                "CRUD operation",
                "Local storage Integration",
                "Sorting and filtering options",
            ],
            techs: [<FaReact />, <SiJavascript/>, <SiTailwindcss />, <SiDaisyui />, <SiReacthookform/>, <SiVercel />],
            live_link: "https://task-tracker-rakibul.vercel.app/",
            git_link: "https://github.com/Rakibul-98/task-tracker",
        },
        {
            id: 1,
            category: "React",
            image: "https://i.ibb.co.com/w6819q4/restaurant.jpg",
            title: "Restaurant Website",
            desc: "This is an online restaurant website. It includes interactive carousels, smooth transitions, and a clean UI.",
            features: [
                "Interactive Carousel",
                "Animating Social Icons",
                "Smooth Transition Effects",
            ],
            techs: [<FaReact />, <SiTailwindcss />, <SiDaisyui />, <SiVercel />],
            live_link: "https://restaurant-app-rakibul.vercel.app/",
            git_link: "https://github.com/Rakibul-98/restaurant-app",
        },
        {
            id: 14,
            category: "React",
            image: "https://i.ibb.co.com/7rQKnY4/digital-service.jpg",
            title: "Agency Website",
            desc: "A digital service agency website with a rotating carousel and a clean interface.",
            features: [
                "Dynamic, rotating carousel",
                "Clean, intuitive user interface",
                "Responsive Design",
            ],
            techs: [<FaReact />, <FaGithub />, <SiTailwindcss />, <SiDaisyui />, <SiNetlify />],
            live_link: "https://digital-service-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/digital-agency",
        },
        {
            id: 2,
            category: "React",
            image: "https://i.ibb.co.com/mv4D5VJ/bookish.jpg",
            title: "Bookish e-shop",
            desc: "This is an e-shop for books where you can view and purchase books online. This project uses Firebase for authentication and MongoDB for storage.",
            features: [
                "Dynamic Carousel",
                "Load data from backend",
                "Responsive Design"
            ],
            techs: [<FaReact />,  <SiDaisyui/>, <SiTailwindcss />, <SiFirebase />, <SiMongodb />,],
            live_link: "https://bookish-43bb7.web.app/",
            git_link: "https://github.com/Rakibul-98/bookish-client",
        },
        {
            id: 3,
            category: "API",
            image: "https://i.ibb.co.com/tPHSbZ3/weather-map.jpg",
            title: "Weather App",
            desc: "This website shows the current weather condition of any city, using a weather API.",
            features: [
                "Plain HTML, CSS, JS", 
                "Load data by API", 
                "Responsive Design"
            ],
            techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <TbApi />, <SiNetlify/>],
            live_link: "https://weather2-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/modern-weather-api",
        },
        {
            id: 4,
            category: "UI",
            image: "https://i.ibb.co.com/pLNhNYQ/coffee.jpg",
            title: "Coffee Shop",
            desc: "A UX design for a coffee shop built with HTML and CSS.",
            features: ["Plain HTML, CSS", "Bootstrap CSS library"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiNetlify />],
            live_link: "https://coffee-shop-0-by-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/coffee-shop-website",
        },
        {
            id: 5,
            category: "UI",
            image: "https://i.ibb.co.com/SKnRQKB/clock.jpg",
            title: "Clock Morphism",
            desc: "A glass morphism clock design built using HTML, CSS, and JavaScript.",
            features: ["Plain HTML, CSS, JS", "Glass Morphism"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
            live_link: "https://simple-clock-by-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/clock_practice",
        },
        {
            id: 13,
            category: "React",
            image: "https://i.ibb.co.com/NSt4hKn/taste-the-flavor.jpg",
            title: "Restaurant Website",
            desc: "A restaurant website with a rotating carousel, count-up, and Google Map integration.",
            features: ["Carousel", "Google Map"],
            techs: [<FaReact />, <FaGithub />, <SiTailwindcss />, <SiDaisyui />, <SiNetlify />, <SiGooglemaps/>],
            live_link: "https://restaurant-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/restaurant",
        },
        {
            id: 7,
            category: "React",
            image: "https://i.ibb.co.com/mGkDT22/organic-store.jpg",
            title: "Organic Store",
            desc:"This is an e-commerce website for grocery products. It has a dynamic and responsive front-end design, shopping cart, and user authentication system. It can save users' previous shopping activity by accessing local storage.",
            features: ["User Authentication", "Database integration", "Product Search"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <FaReact />, <SiTailwindcss/>, <SiFirebase/>, <SiMongodb/>, <BsRouter/>],
            live_link: "https://grocery-shop-70585.web.app/",
            git_link: "https://github.com/Rakibul-98/grocery-shop",
        },
        {
            id: 8,
            category: "React",
            image: "https://i.ibb.co.com/d5SZC0G/learning-platform.jpg",
            title: "E-learning Website",
            desc: "An online learning website built with React, Flowbite, and Tailwind CSS. It includes count-up animations, an accordion, and a multi-carousel.",
            features: ["React count-up", "Accordion", "Multi-carousel"],
            techs: [<FaReact />, <SiTailwindcss />,<SiGooglemaps/>, <SiNetlify/>],
            live_link: "https://e-learning-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/e-learning",
        },
        {
            id: 9,
            category: "JavaScript",
            image: "https://i.ibb.co.com/xjMV1Yy/flight-booking.jpg",
            title: "Flight Booking",
            desc: "A flight booking section for a travel agency website that calculates cost and processes user input.",
            features: ["Form calculation", "Reading form data"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
            live_link: "https://ticket-booking-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/Ticket-Booking",
        },
        {
            id: 10,
            category: "UI",
            image: "https://i.ibb.co.com/drZCMKd/service.jpg",
            title: "Online service App",
            desc:"A front-end design of an 'Online Service App' website using HTML, CSS, and Bootstrap.",
            features: ["Sticky navbar", "Responsive Design", "Font Awesome icons"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiNetlify/>],
            live_link: "https://digital-service-by-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/digital-service-web-app",
        },
        {
            id: 11,
            category: "JavaScript",
            image: "https://i.ibb.co.com/GRsh1w4/pin-matcher.jpg",
            title: "Pin Matcher",
            desc:"A simple pin matcher project using basic JavaScript to generate and verify random pin numbers.",
            features: ["Generate random number", "String matching"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
            live_link: "https://pin-matcher-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/Pin-matcher",
        },
        {
            id: 12,
            category: "API",
            image: "https://i.ibb.co.com/tCv6syz/world-tour.jpg",
            title: "World Tour App",
            desc: "A web app that displays country information by making API calls.",
            features: ["API integration", "Search and filter countries", "Data rendering"],
            techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <TbApi />, <SiNetlify />, <CgSpinner/>],
            live_link: "https://world-tour-rakibul.netlify.app/",
            git_link: "https://github.com/Rakibul-98/country-api",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState({});
    const projectsPerSlide = 3;

    const handleSlide = (direction) => {
        direction === 'next' ? setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length) : setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const openModal = (item) => {
        setSelectedProject(item);
        document.getElementById('project_modal').showModal();
    };

    const handleItemClick = (index) => {
        index === 0 ? handleSlide('prev') : handleSlide('next');
    };

    return (
        <div className="h-screen flex flex-col justify-evenly w-10/12 xl:w-[1000px] mx-auto">
            <div className=" flex flex-col items-center">
                <div className="flex justify-center">
                    {['p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((char, index) => (
                        <span
                            key={index}
                            className="portfolio-title text-5xl md:text-6xl uppercase font-extrabold tracking-widest"
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-center mt-2">&quot;Hard work compounds like interest, and the earlier you do it, the  more <br className="hidden sm:block" /> time you have for the benefits to pay off&quot; — <i>Sam Altman</i></p>
            </div>
            <div className="h-[60vh] grid grid-cols-11 content-center place-items-center">
                {Array.from({ length: projectsPerSlide }).map((_, i) => {
                    const projectIndex = (currentIndex + i) % projects.length;
                    const isMiddle = i === 1;

                    return (
                        <div
                            key={projects[projectIndex].live_link}
                            onClick={isMiddle ? () => openModal(projects[projectIndex]) : () => handleItemClick(i)}
                            className={`relative group transition-transform border border-base-200 w-full shadow-2xl mr-2 duration-300 $${isMiddle ? ' h-72 md:h-80 col-span-5 hover:bg-base-100' : ' col-span-3 h-52 md:h-60'}`}
                        >
                            <img
                                className={`h-full cursor-pointer w-full object-cover ${isMiddle && ' group-hover:opacity-40 '}`}
                                src={projects[projectIndex].image}
                                alt={projects[projectIndex].title} />
                            {
                                isMiddle && (
                                    <h3 className="absolute cursor-pointer group-hover:opacity-100 text-base-200 opacity-0 w-full top-[calc(50%-30px)] text-center uppercase px-5 py-3 font-medium">Click to show details</h3>
                                )
                            }
                        </div>
                    );
                })}
                <ItemModal project={selectedProject} />
                <div className=" w-full col-span-11 flex justify-between text-4xl">
                    <button className={`active:text-primary`} onClick={() => handleSlide('prev')}><TbSquareArrowLeftFilled /></button>
                    <button className={`active:text-primary`} onClick={() => handleSlide('next')}><TbSquareArrowRightFilled /></button>
                </div>
            </div>

        </div>
    );
}
