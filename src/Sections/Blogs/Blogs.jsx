import { useState } from 'react';

export default function BlogSection() {

  const blogs = [
    { id: 1, title: 'Blog 1', description: 'This is a short description for Blog 1.', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Blog 2', description: 'This is a short description for Blog 2.', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Blog 3', description: 'This is a short description for Blog 3.', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Blog 4', description: 'This is a short description for Blog 4.', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Blog 5', description: 'This is a short description for Blog 5.', image: 'https://via.placeholder.com/150' },
  ];

  const [currentBlogIndex, setCurrentBlogIndex] = useState(blogs.length - 1);

  const handleBlogClick = (index) => {
    setCurrentBlogIndex(index);
  };


  return (
    <div className="h-screen w-9/12 mx-auto overflow-hidden px-5 py-10">
      <div className='mb-10'>
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <p className="text-gray-600">Check out our latest blog posts.</p>
      </div>
      <div className='w-[700px] mx-auto'>
        {blogs.slice().reverse().map((blog, index) => {
          const isActive = index === currentBlogIndex;

          return (
            <div
              key={blog.id}
              className={`border transition-all duration-300 bg-white rounded-xl 
              ${isActive ? 'z-10 max-h-[300px] shadow-lg' : 'z-0 max-h-12 overflow-hidden'}`}
              style={{
                position: 'relative',
                marginTop: '-15px',
              }}
              onClick={() => handleBlogClick(index)}
            >
              <img src={blog.image} alt={blog.title} className="h-20 w-full rounded-t-xl" />
              <h3 className="text-xl font-bold">{blog.title}</h3>
              {isActive && <p className="text-gray-600">{blog.description}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
