
import frontEnd from '../../assets/services/front-end.svg';
import api from '../../assets/services/api.svg';
import custom from '../../assets/services/custom.svg';
import { useState } from 'react';
import '../../App.css';
import Tilt from 'react-parallax-tilt';


export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { id: 1, img: frontEnd, name: 'Front-end Development', desc: 'With a strong focus on user experience, I develop responsive and interactive user interfaces using React, emphasizing clean code and best practices. My goal is to create modern, intuitive designs that engage users and boost conversions, ensuring your application delivers exceptional value.' },

    { id: 2, img: custom, name: 'Custom Website', desc: 'I build tailored web applications using the MERN stack, combining cutting-edge technology with your business goals. My focus on scalability and performance ensures a seamless user experience that helps you stand out in a competitive market.' },
    { id: 3, img: api, name: 'API Development', desc: 'I create robust RESTful APIs with Express.js and Node.js, designed for performance, security, and scalability. My APIs facilitate smooth data exchange, empowering your application to enhance user satisfaction and drive retention.' },
  ];

  const handleCardClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className='min-h-screen flex items-center py-5'>
      <div className='w-10/12 mx-auto flex md:block'>
        <div className='md:mb-20 text-center flex items-center md:block'>
          <div className="flex flex-col md:flex-row justify-center">
            {['s', 'e', 'r', 'v', 'i', 'c', 'e', 's'].map((char, index) => (
              <span
                key={index}
                className="service-title text-6xl uppercase font-extrabold tracking-widest"
              >
                {char}
              </span>
            ))}
          </div>
          <small className='hidden md:block mt-3 text-sm'>&#xFF02;To give real service you must add something which cannot be bought or measured with <br /> money, and that is sincerity and integrity&#xFF02; <i className=' whitespace-nowrap'>— Don Alden Adams</i></small>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className=' grid md:grid-cols-3 gap-5 md:gap-10 justify-items-center'>
            {
              services.map((service, index) => (
                <Tilt key={index}>
                  <div
                    onClick={() => handleCardClick(service.id)}
                    className={`w-64 md:w-56 lg:w-72 h-[150px] md:h-[300px] rounded-lg shadow-xl cursor-pointer relative overflow-hidden ${service.id === 1 || service.id === 3 ? 'bg-[#A4E6B7] hover:bg-[#8fe2a7]' : 'bg-[#D39BD9] hover:bg-[#C886D3]'}`}>
                    <div
                      className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 ${activeService === service.id ? 'translate-x-[-100%]' : 'translate-x-0'
                        }`}
                    >
                      <img src={service.img} alt={service.name} />
                    </div>
                    <div
                      className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-transform duration-500 text-[#2f2526] ${activeService === service.id ? 'translate-x-0' : 'translate-x-[100%]'}`}
                    >
                      <h3 className='text-lg font-medium'>{service.name}</h3>
                      <p className="p-3 hidden text-sm lg:md md:block">{service.desc}</p>
                    </div>
                  </div>
                </Tilt>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
