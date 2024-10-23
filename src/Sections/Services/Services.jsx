import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Services.css';

export default function Services() {
  const services = [
    { id: 1, name: 'Service 1', desc: 'Description for Service 1.' },
    { id: 2, name: 'Service 2', desc: 'Description for Service 2.' },
    { id: 3, name: 'Service 3', desc: 'Description for Service 3.' },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [inProp, setInProp] = useState(true);

  const handleServiceClick = (service) => {
    setInProp(false);
    setTimeout(() => {
      setSelectedService(service);
      setInProp(true);
    }, 300);
  };

  return (
    <div className="w-[700px] mx-auto">
      <div className="border h-[400px]">
        <div className="grid grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className={`flex justify-center p-2 border border-t-0 cursor-pointer ${selectedService.id === service.id ? 'bg-gray-300' : ''}`}
              onClick={() => handleServiceClick(service)}
            >
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
        <div className="p-4">
          <CSSTransition
            in={inProp}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >

            <div>
              <img className='h-20 border w-20 mx-auto' src="/" alt="icon" />
              <h4 className='text-xl font-medium'>{selectedService.name}</h4>
              <p className='py-2'>{selectedService.desc}</p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
