/* eslint-disable react/jsx-key */
import {  FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiDaisyui, SiFirebase,  SiJavascript, SiMongodb, SiNetlify, SiNextdotjs, SiReacthookform, SiRender, SiShadcnui, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { BsRouter } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
import { TbApi } from "react-icons/tb";

export const projects = [
    {
        id: 17,
        category: "Next",
        images: [
            "https://i.ibb.co.com/ZRKS4R6g/hr1.png",
            "https://i.ibb.co.com/nMznmgnP/hr2.png",
            "https://i.ibb.co.com/zWq86Xs7/hr3.png",
        ],
        title: "House Finder",
        overview: "A comprehensive property rental platform connecting homeowners with tenants through advanced search filters and secure communication channels.",
        desc: "House Finder is a modern, responsive platform for finding and listing homes, featuring secure authentication, seamless property search, and an intuitive user experience.",
        features: [
            "JWT-based authentication system",
            "MongoDB database with Mongoose ODM",
            "Real-time email notifications",
            "Geo-location search functionality"
        ],
        challenges: [
            "Implementing secure file uploads for property images",
            "Managing real-time updates across user roles",
            "Handling complex search queries with multiple filters"
        ],
        strategy: [
            "Used Next.js API routes for backend logic",
            "Implemented Cloudinary for image management",
            "Utilized Redis for caching frequent queries"
        ],
        futureScope: [
            "Add virtual tour integration",
            "Implement chat functionality",
            "Develop mobile app version"
        ],
        techs: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />, <SiShadcnui />, <SiMongodb />, <SiRender />],
        live_link: "https://house-finder-rakibul.vercel.app/",
        git_link: "https://github.com/Rakibul-98/house-rent-client.git",
    },
    {
        id: 16,
        category: "React",
        images: [
            "https://i.ibb.co.com/p6DvzVf9/bs1.png",
            "https://i.ibb.co.com/v4PwTcVp/bs2.png",
            "https://i.ibb.co.com/ymZXJTJz/bs3.png"
        ],
        title: "Bike Solution",
        overview: "Full-stack e-commerce platform for premium bicycles with integrated inventory management and order processing.",
        desc: "A modern, responsive e-commerce platform for purchasing bikes, featuring secure authentication, seamless checkout, order tracking, and an intuitive user experience.",
        features: [
            "Surjo pay payment integration",
            "Admin dashboard with analytics",
            "User role management system"
        ],
        challenges: [
            "Handling payment gateway security",
            "Managing complex user session states",
            "Optimizing product image loading"
        ],
        strategy: [
            "Implemented React Query for state management",
            "Used React Lazy for code splitting",
            "Adopted JWT token rotation for security"
        ],
        futureScope: [
            "Add bike customization tool",
            "Integrate AR preview feature",
            "Develop loyalty program system"
        ],
        techs: [<FaReact />, <SiTypescript />, <SiTailwindcss />, <SiDaisyui />, <SiReacthookform />, <SiVercel />],
        live_link: "https://bike-solution-rakibul.vercel.app/",
        git_link: "https://github.com/Rakibul-98/bike-store-client.git",
    },
    {
        id: 7,
        category: "React",
        images: [
            "https://i.ibb.co.com/mGkDT22/organic-store.jpg",
            "https://i.ibb.co.com/3y3MvvvJ/os2.png",
            "https://i.ibb.co.com/8LZDwdhp/os3.png"
        ],
        title: "Organic Store",
        overview: "Sustainable grocery platform with farm-to-table tracking features.",
        desc: "Organic Store is a dynamic e-commerce web application designed for a seamless user experience in browsing and purchasing organic products. Built with modern web technologies, Organic Store ensures a visually appealing and efficient shopping experience.",
        features: [
            "Product search functionality",
            "Store data in local storage",
            "Responsive design"
        ],
        challenges: [
            "Implementing real-time inventory",
            "Handling user authentication"
        ],
        strategy: [
            "Used Firebase for auth",
            "Adopted CSS-in-JS for styling"
        ],
        futureScope: [
            "Add database for better performance",
            "Implement delivery tracking",
            "Develop community features"
        ],
        techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <FaReact />, <SiTailwindcss />, <SiFirebase />, <SiMongodb />, <BsRouter />],
        live_link: "https://grocery-shop-70585.web.app/",
        git_link: "https://github.com/Rakibul-98/grocery-shop",
    },
    {
        id: 15,
        category: "React",
        images: [
            "https://i.ibb.co.com/PxjKxZQ/task-tracker.jpg",
            "https://i.ibb.co.com/rGCC8B7N/tt2.png"
        ],
        title: "Task Tracker",
        overview: "Productivity management system with cloud synchronization and collaborative features.",
        desc: "The Task Tracker web application facilitates task management for teams within an organization. Users can create, modify, and organize tasks efficiently. Additionally, the app offers robust filtering and sorting functionalities to streamline task management processes.",
        features: [
            "CRUD operations with undo/redo",
            "Local storage fallback mechanism",
            "Priority-based task sorting",
        ],
        challenges: [
            "Maintaining data consistency across devices",
            "Implementing complex state transitions",
            "Handling offline functionality"
        ],
        strategy: [
            "Adopted optimistic UI updates"
        ],
        futureScope: [
            "Add team collaboration features",
            "Implement calendar integration",
            "Develop mobile app version"
        ],
        techs: [<FaReact />, <SiJavascript />, <SiTailwindcss />, <SiDaisyui />, <SiReacthookform />, <SiVercel />],
        live_link: "https://task-tracker-rakibul.vercel.app/",
        git_link: "https://github.com/Rakibul-98/task-tracker",
    },
    {
        id: 1,
        category: "React",
        images: [
            "https://i.ibb.co.com/w6819q4/restaurant.jpg",
            "https://i.ibb.co.com/hJbpZQK3/rw2.png",
            "https://i.ibb.co.com/Y4cV94LG/rw3.png",
        ],
        title: "Restaurant Website",
        overview: "Modern culinary platform showcasing menu items with immersive visual experiences.",
        desc: "This project showcases a fresh and unique design tailored to captivate and engage visitors. Built with modern web technologies, this landing page ensures both aesthetics and functionality.",
        features: [
            "Animated menu transitions",
            "Interactive Carousel",
            "Responsive Design"
        ],
        challenges: [
            "Optimizing animation performance",
            "Handling responsive image loading"
        ],
        strategy: [
            "Adopted CSS containment for performance"
        ],
        futureScope: [
            "Add online ordering system",
            "Integrate table booking API",
            "Develop loyalty program"
        ],
        techs: [<FaReact />, <SiTailwindcss />, <SiDaisyui />, <SiVercel />],
        live_link: "https://restaurant-app-rakibul.vercel.app/",
        git_link: "https://github.com/Rakibul-98/restaurant-app",
    },
    {
        id: 3,
        category: "API",
        images: [
            "https://i.ibb.co.com/tPHSbZ3/weather-map.jpg",
        ],
        title: "Weather App",
        overview: "Real-time weather forecasting platform with historical data analysis.",
        desc: "This is a UI design for a simple weather app. The design is built with plain HTML and CSS and utilizes an API to retrieve weather data.",
        features: [
            "Daily weather forecast",
            "Restful API Interation"
        ],
        challenges: [
            "Handling API rate limits",
            "Processing complex JSON responses"
        ],
        strategy: [
            "Adopted error boundary patterns"
        ],
        futureScope: [
            "Add weather prediction models",
            "Implement user location tracking",
            "Develop gardening recommendations"
        ],
        techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <TbApi />, <SiNetlify />],
        live_link: "https://weather2-rakibul.netlify.app/",
        git_link: "https://github.com/Rakibul-98/modern-weather-api",
    },
    // {
    //     id: 14,
    //     category: "React",
    //     images: [
    //         "https://i.ibb.co.com/7rQKnY4/digital-service.jpg",
    //         "https://example.com/agency-2.jpg"
    //     ],
    //     title: "Agency Website",
    //     overview: "Digital marketing platform with service visualization and client engagement features.",
    //     desc: "Digital service agency website with rotating carousel and clean interface.",
    //     features: [
    //         "Interactive service calculator",
    //         "Client testimonial slider",
    //         "Project showcase gallery",
    //         "Contact form with CAPTCHA"
    //     ],
    //     challenges: [
    //         "Implementing smooth 3D transitions",
    //         "Optimizing hero section performance",
    //         "Managing complex form validation"
    //     ],
    //     strategy: [
    //         "Used Three.js for 3D elements",
    //         "Implemented React Hook Form",
    //         "Adopted CSS Grid for layouts"
    //     ],
    //     futureScope: [
    //         "Add client portal",
    //         "Integrate analytics dashboard",
    //         "Develop CMS integration"
    //     ],
    //     techs: [<FaReact />, <FaGithub />, <SiTailwindcss />, <SiDaisyui />, <SiNetlify />],
    //     live_link: "https://digital-service-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/digital-agency",
    // },
    // {
    //     id: 2,
    //     category: "React",
    //     images: [
    //         "https://i.ibb.co.com/mv4D5VJ/bookish.jpg",
    //         "https://example.com/bookish-2.jpg"
    //     ],
    //     title: "Bookish e-shop",
    //     overview: "Online bookstore with personalized recommendations and social sharing features.",
    //     desc: "E-shop for books with Firebase authentication and MongoDB integration.",
    //     features: [
    //         "Personalized book recommendations",
    //         "Wishlist sharing functionality",
    //         "Advanced search filters",
    //         "User review system"
    //     ],
    //     challenges: [
    //         "Managing real-time inventory updates",
    //         "Handling complex search queries",
    //         "Securing payment processing"
    //     ],
    //     strategy: [
    //         "Implemented Elasticsearch for search",
    //         "Used Firebase Realtime Database",
    //         "Adopted server-side rendering"
    //     ],
    //     futureScope: [
    //         "Add audiobook integration",
    //         "Implement book subscription model",
    //         "Develop reading progress tracker"
    //     ],
    //     techs: [<FaReact />, <SiDaisyui />, <SiTailwindcss />, <SiFirebase />, <SiMongodb />],
    //     live_link: "https://bookish-43bb7.web.app/",
    //     git_link: "https://github.com/Rakibul-98/bookish-client",
    // },
    // {
    //     id: 4,
    //     category: "UI",
    //     images: [
    //         "https://i.ibb.co.com/pLNhNYQ/coffee.jpg",
    //         "https://example.com/coffee-2.jpg"
    //     ],
    //     title: "Coffee Shop",
    //     overview: "Artisanal coffee experience platform with virtual café tour features.",
    //     desc: "UX-focused coffee shop website with immersive visual elements.",
    //     features: [
    //         "Interactive menu navigation",
    //         "Virtual café 360° view",
    //         "Loyalty program integration",
    //         "Mobile-first design"
    //     ],
    //     challenges: [
    //         "Creating responsive product cards",
    //         "Optimizing image-heavy content",
    //         "Maintaining design consistency"
    //     ],
    //     strategy: [
    //         "Used CSS Grid for layouts",
    //         "Implemented lazy loading",
    //         "Adopted BEM naming convention"
    //     ],
    //     futureScope: [
    //         "Add online ordering system",
    //         "Implement AR coffee art preview",
    //         "Develop barista training modules"
    //     ],
    //     techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiNetlify />],
    //     live_link: "https://coffee-shop-0-by-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/coffee-shop-website",
    // },
    // {
    //     id: 5,
    //     category: "UI",
    //     images: [
    //         "https://i.ibb.co.com/SKnRQKB/clock.jpg",
    //         "https://example.com/clock-2.jpg"
    //     ],
    //     title: "Clock Morphism",
    //     overview: "Modern timekeeping interface with customizable visual themes.",
    //     desc: "Glassmorphism-style clock with smooth animations and themes.",
    //     features: [
    //         "Multiple theme options",
    //         "Time zone conversion",
    //         "Customizable widget sizes",
    //         "Battery status indicator"
    //     ],
    //     challenges: [
    //         "Achieving consistent blur effects",
    //         "Synchronizing precise time updates",
    //         "Optimizing animation performance"
    //     ],
    //     strategy: [
    //         "Used CSS @supports for fallbacks",
    //         "Implemented requestAnimationFrame",
    //         "Adopted CSS variables for themes"
    //     ],
    //     futureScope: [
    //         "Add world clock comparison",
    //         "Implement alarm system",
    //         "Develop desktop widget version"
    //     ],
    //     techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify />],
    //     live_link: "https://simple-clock-by-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/clock_practice",
    // },
    // {
    //     id: 13,
    //     category: "React",
    //     images: [
    //         "https://i.ibb.co.com/NSt4hKn/taste-the-flavor.jpg",
    //         "https://example.com/restaurant2-2.jpg"
    //     ],
    //     title: "Restaurant Website",
    //     overview: "Culinary experience platform with interactive menu exploration.",
    //     desc: "Restaurant website with integrated Google Maps and dynamic content.",
    //     features: [
    //         "Interactive menu filtering",
    //         "Real-time table availability",
    //         "Chef's specials carousel",
    //         "Nutritional information display"
    //     ],
    //     challenges: [
    //         "Integrating third-party map services",
    //         "Managing complex animations",
    //         "Handling high-resolution images"
    //     ],
    //     strategy: [
    //         "Used React Google Maps library",
    //         "Implemented Intersection Observer API",
    //         "Adopted WebP image format"
    //     ],
    //     futureScope: [
    //         "Add virtual kitchen tour",
    //         "Implement meal customization",
    //         "Develop loyalty program"
    //     ],
    //     techs: [<FaReact />, <FaGithub />, <SiTailwindcss />, <SiDaisyui />, <SiNetlify />, <SiGooglemaps />],
    //     live_link: "https://restaurant-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/restaurant",
    // },
    // {
    //     id: 8,
    //     category: "React",
    //     images: [
    //         "https://i.ibb.co.com/d5SZC0G/learning-platform.jpg",
    //         "https://example.com/elearning-2.jpg"
    //     ],
    //     title: "E-learning Website",
    //     overview: "Interactive learning platform with progress tracking and certification.",
    //     desc: "Online learning system with course management and student analytics.",
    //     features: [
    //         "Course progress tracking",
    //         "Interactive quizzes",
    //         "Video streaming",
    //         "Achievement badges"
    //     ],
    //     challenges: [
    //         "Managing video content delivery",
    //         "Handling complex user progress states",
    //         "Implementing DRM for content"
    //     ],
    //     strategy: [
    //         "Used Video.js for streaming",
    //         "Implemented Zustand for state",
    //         "Adopted HLS for video delivery"
    //     ],
    //     futureScope: [
    //         "Add live class feature",
    //         "Implement AI-powered recommendations",
    //         "Develop mobile app version"
    //     ],
    //     techs: [<FaReact />, <SiTailwindcss />, <SiGooglemaps />, <SiNetlify />],
    //     live_link: "https://e-learning-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/e-learning",
    // },
    // {
    //     id: 9,
    //     category: "JavaScript",
    //     images: [
    //         "https://i.ibb.co.com/xjMV1Yy/flight-booking.jpg",
    //         "https://example.com/flight-2.jpg"
    //     ],
    //     title: "Flight Booking",
    //     overview: "Air travel management system with dynamic pricing and itinerary planning.",
    //     desc: "Flight booking engine with real-time price comparison and alerts.",
    //     features: [
    //         "Multi-city trip planning",
    //         "Price alert system",
    //         "Seat selection map",
    //         "Baggage calculator"
    //     ],
    //     challenges: [
    //         "Handling complex date calculations",
    //         "Managing currency conversions",
    //         "Implementing seat map visualization"
    //     ],
    //     strategy: [
    //         "Used date-fns for dates",
    //         "Implemented Intl for currency",
    //         "Adopted Canvas for seat maps"
    //     ],
    //     futureScope: [
    //         "Add hotel bundle deals",
    //         "Implement visa check tool",
    //         "Develop mobile check-in"
    //     ],
    //     techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify />],
    //     live_link: "https://ticket-booking-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/Ticket-Booking",
    // },
    // {
    //     id: 10,
    //     category: "UI",
    //     images: [
    //         "https://i.ibb.co.com/drZCMKd/service.jpg",
    //         "https://example.com/service-2.jpg"
    //     ],
    //     title: "Online Service App",
    //     overview: "Digital service marketplace with provider matching algorithm.",
    //     desc: "Service platform connecting professionals with clients through smart matching.",
    //     features: [
    //         "Service provider matching",
    //         "Rating system",
    //         "In-app messaging",
    //         "Service tracking"
    //     ],
    //     challenges: [
    //         "Creating responsive data tables",
    //         "Implementing complex filters",
    //         "Managing user session states"
    //     ],
    //     strategy: [
    //         "Used DataTables library",
    //         "Implemented debounced search",
    //         "Adopted JWT for sessions"
    //     ],
    //     futureScope: [
    //         "Add video consultation",
    //         "Implement AI matching",
    //         "Develop service packages"
    //     ],
    //     techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiNetlify />],
    //     live_link: "https://digital-service-by-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/digital-service-web-app",
    // },
    // {
    //     id: 11,
    //     category: "JavaScript",
    //     images: [
    //         "https://i.ibb.co.com/GRsh1w4/pin-matcher.jpg",
    //         "https://example.com/pin-2.jpg"
    //     ],
    //     title: "Pin Matcher",
    //     overview: "Secure authentication system with advanced security features.",
    //     desc: "PIN validation system with encryption and security protocols.",
    //     features: [
    //         "AES-256 encryption",
    //         "Brute-force protection",
    //         "Time-based OTP",
    //         "Security audit log"
    //     ],
    //     challenges: [
    //         "Implementing secure encryption",
    //         "Preventing timing attacks",
    //         "Managing secure key storage"
    //     ],
    //     strategy: [
    //         "Used Web Crypto API",
    //         "Implemented rate limiting",
    //         "Adopted secure storage practices"
    //     ],
    //     futureScope: [
    //         "Add biometric authentication",
    //         "Implement hardware key support",
    //         "Develop password manager"
    //     ],
    //     techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify />],
    //     live_link: "https://pin-matcher-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/Pin-matcher",
    // },
    // {
    //     id: 12,
    //     category: "API",
    //     images: [
    //         "https://i.ibb.co.com/tCv6syz/world-tour.jpg",
    //         "https://example.com/world-2.jpg"
    //     ],
    //     title: "World Tour App",
    //     overview: "Global travel companion with cultural insights and trip planning.",
    //     desc: "Country information system with API-driven data visualization.",
    //     features: [
    //         "Interactive world map",
    //         "Cultural etiquette guide",
    //         "Visa requirement checker",
    //         "Travel checklist generator"
    //     ],
    //     challenges: [
    //         "Handling large datasets",
    //         "Implementing map interactions",
    //         "Managing API rate limits"
    //     ],
    //     strategy: [
    //         "Used D3.js for maps",
    //         "Implemented client-side caching",
    //         "Adopted pagination for data"
    //     ],
    //     futureScope: [
    //         "Add travel blog integration",
    //         "Implement language translator",
    //         "Develop packing list AI"
    //     ],
    //     techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <TbApi />, <SiNetlify />, <CgSpinner />],
    //     live_link: "https://world-tour-rakibul.netlify.app/",
    //     git_link: "https://github.com/Rakibul-98/country-api",
    // },
];


// export const projects = [
//     {
//         id: 17,
//         category: "Next",
//         image: "https://i.ibb.co.com/Lzf71z7w/hr-banner.png",
//         title: "House Finder",
//         desc: "House Finder is a modern, responsive platform for finding and listing homes.",
//         features: [
//             "Role Based Authentication",
//             "Database Integration",
//             "Email Notification",
//         ],
//         techs: [<SiNextdotjs />, <SiTypescript/>, <SiTailwindcss />, <SiShadcnui />, <SiMongodb/>, <SiRender />],
//         live_link: "https://house-rent-client.onrender.com",
//         git_link: "https://github.com/Rakibul-98/house-rent-client.git",
//     },
//     {
//         id: 16,
//         category: "React",
//         image: "https://i.ibb.co.com/wZddPbw4/Screenshot-2025-02-24-203853.png",
//         title: "Bike Solution",
//         desc: "A modern, responsive e-commerce platform for purchasing bikes.",
//         features: [
//             "Rolebased Authentication",
//             "Payment Gateway Integration",
//             "User dashboard based on role",
//         ],
//         techs: [<FaReact />, <SiTypescript/>, <SiTailwindcss />, <SiDaisyui />, <SiReacthookform/>, <SiVercel />],
//         live_link: "https://bike-solution-rakibul.vercel.app/",
//         git_link: "https://github.com/Rakibul-98/bike-store-client.git",
//     },
//     {
//         id: 15,
//         category: "React",
//         image: "https://i.ibb.co.com/PxjKxZQ/task-tracker.jpg",
//         title: "Task Tracker",
//         desc: "This is an online task tracker. Here I added a database to load the task details. This website is my ongoing project.",
//         features: [
//             "CRUD operation",
//             "Local storage Integration",
//             "Sorting and filtering options",
//         ],
//         techs: [<FaReact />, <SiJavascript/>, <SiTailwindcss />, <SiDaisyui />, <SiReacthookform/>, <SiVercel />],
//         live_link: "https://task-tracker-rakibul.vercel.app/",
//         git_link: "https://github.com/Rakibul-98/task-tracker",
//     },
//     {
//         id: 1,
//         category: "React",
//         image: "https://i.ibb.co.com/w6819q4/restaurant.jpg",
//         title: "Restaurant Website",
//         desc: "This is an online restaurant website. It includes interactive carousels, smooth transitions, and a clean UI.",
//         features: [
//             "Interactive Carousel",
//             "Animating Social Icons",
//             "Smooth Transition Effects",
//         ],
//         techs: [<FaReact />, <SiTailwindcss />, <SiDaisyui />, <SiVercel />],
//         live_link: "https://restaurant-app-rakibul.vercel.app/",
//         git_link: "https://github.com/Rakibul-98/restaurant-app",
//     },
//     {
//         id: 14,
//         category: "React",
//         image: "https://i.ibb.co.com/7rQKnY4/digital-service.jpg",
//         title: "Agency Website",
//         desc: "A digital service agency website with a rotating carousel and a clean interface.",
//         features: [
//             "Dynamic, rotating carousel",
//             "Clean, intuitive user interface",
//             "Responsive Design",
//         ],
//         techs: [<FaReact />, <FaGithub />, <SiTailwindcss />, <SiDaisyui />, <SiNetlify />],
//         live_link: "https://digital-service-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/digital-agency",
//     },
//     {
//         id: 2,
//         category: "React",
//         image: "https://i.ibb.co.com/mv4D5VJ/bookish.jpg",
//         title: "Bookish e-shop",
//         desc: "This is an e-shop for books where you can view and purchase books online. This project uses Firebase for authentication and MongoDB for storage.",
//         features: [
//             "Dynamic Carousel",
//             "Load data from backend",
//             "Responsive Design"
//         ],
//         techs: [<FaReact />,  <SiDaisyui/>, <SiTailwindcss />, <SiFirebase />, <SiMongodb />,],
//         live_link: "https://bookish-43bb7.web.app/",
//         git_link: "https://github.com/Rakibul-98/bookish-client",
//     },
//     {
//         id: 3,
//         category: "API",
//         image: "https://i.ibb.co.com/tPHSbZ3/weather-map.jpg",
//         title: "Weather App",
//         desc: "This website shows the current weather condition of any city, using a weather API.",
//         features: [
//             "Plain HTML, CSS, JS",
//             "Load data by API",
//             "Responsive Design"
//         ],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <TbApi />, <SiNetlify/>],
//         live_link: "https://weather2-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/modern-weather-api",
//     },
//     {
//         id: 4,
//         category: "UI",
//         image: "https://i.ibb.co.com/pLNhNYQ/coffee.jpg",
//         title: "Coffee Shop",
//         desc: "A UX design for a coffee shop built with HTML and CSS.",
//         features: ["Plain HTML, CSS", "Bootstrap CSS library"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiNetlify />],
//         live_link: "https://coffee-shop-0-by-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/coffee-shop-website",
//     },
//     {
//         id: 5,
//         category: "UI",
//         image: "https://i.ibb.co.com/SKnRQKB/clock.jpg",
//         title: "Clock Morphism",
//         desc: "A glass morphism clock design built using HTML, CSS, and JavaScript.",
//         features: ["Plain HTML, CSS, JS", "Glass Morphism"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
//         live_link: "https://simple-clock-by-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/clock_practice",
//     },
//     {
//         id: 13,
//         category: "React",
//         image: "https://i.ibb.co.com/NSt4hKn/taste-the-flavor.jpg",
//         title: "Restaurant Website",
//         desc: "A restaurant website with a rotating carousel, count-up, and Google Map integration.",
//         features: ["Carousel", "Google Map"],
//         techs: [<FaReact />, <FaGithub />, <SiTailwindcss />, <SiDaisyui />, <SiNetlify />, <SiGooglemaps/>],
//         live_link: "https://restaurant-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/restaurant",
//     },
//     {
//         id: 7,
//         category: "React",
//         image: "https://i.ibb.co.com/mGkDT22/organic-store.jpg",
//         title: "Organic Store",
//         desc:"This is an e-commerce website for grocery products. It has a dynamic and responsive front-end design, shopping cart, and user authentication system. It can save users' previous shopping activity by accessing local storage.",
//         features: ["User Authentication", "Database integration", "Product Search"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <FaReact />, <SiTailwindcss/>, <SiFirebase/>, <SiMongodb/>, <BsRouter/>],
//         live_link: "https://grocery-shop-70585.web.app/",
//         git_link: "https://github.com/Rakibul-98/grocery-shop",
//     },
//     {
//         id: 8,
//         category: "React",
//         image: "https://i.ibb.co.com/d5SZC0G/learning-platform.jpg",
//         title: "E-learning Website",
//         desc: "An online learning website built with React, Flowbite, and Tailwind CSS. It includes count-up animations, an accordion, and a multi-carousel.",
//         features: ["React count-up", "Accordion", "Multi-carousel"],
//         techs: [<FaReact />, <SiTailwindcss />,<SiGooglemaps/>, <SiNetlify/>],
//         live_link: "https://e-learning-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/e-learning",
//     },
//     {
//         id: 9,
//         category: "JavaScript",
//         image: "https://i.ibb.co.com/xjMV1Yy/flight-booking.jpg",
//         title: "Flight Booking",
//         desc: "A flight booking section for a travel agency website that calculates cost and processes user input.",
//         features: ["Form calculation", "Reading form data"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
//         live_link: "https://ticket-booking-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/Ticket-Booking",
//     },
//     {
//         id: 10,
//         category: "UI",
//         image: "https://i.ibb.co.com/drZCMKd/service.jpg",
//         title: "Online service App",
//         desc:"A front-end design of an 'Online Service App' website using HTML, CSS, and Bootstrap.",
//         features: ["Sticky navbar", "Responsive Design", "Font Awesome icons"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiNetlify/>],
//         live_link: "https://digital-service-by-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/digital-service-web-app",
//     },
//     {
//         id: 11,
//         category: "JavaScript",
//         image: "https://i.ibb.co.com/GRsh1w4/pin-matcher.jpg",
//         title: "Pin Matcher",
//         desc:"A simple pin matcher project using basic JavaScript to generate and verify random pin numbers.",
//         features: ["Generate random number", "String matching"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
//         live_link: "https://pin-matcher-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/Pin-matcher",
//     },
//     {
//         id: 12,
//         category: "API",
//         image: "https://i.ibb.co.com/tCv6syz/world-tour.jpg",
//         title: "World Tour App",
//         desc: "A web app that displays country information by making API calls.",
//         features: ["API integration", "Search and filter countries", "Data rendering"],
//         techs: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <TbApi />, <SiNetlify />, <CgSpinner/>],
//         live_link: "https://world-tour-rakibul.netlify.app/",
//         git_link: "https://github.com/Rakibul-98/country-api",
//     },
// ];