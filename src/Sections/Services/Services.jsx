

export default function Services() {
  const services = [
    { id: 1, name: 'Service 1', desc: 'Description for Service 1.' },
    { id: 2, name: 'Service 2', desc: 'Description for Service 2.' },
    { id: 3, name: 'Service 3', desc: 'Description for Service 3.' },
  ];


  return (
    <div className="w-10/12 mx-auto">
      <div className='grid grid-cols-3 justify-items-center'>
        {
          services.map((service, index) => (
            <div key={index} className="border ">
              {service.name}
            </div>
          ))
        }
      </div>
    </div>
  );
}
