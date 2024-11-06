import { useState } from 'react';
import image from '../../assets/blogs.svg';

export default function BlogSection() {

  const blogs = [
    { id: 2, title: 'Beyond the Basics: Exploring the Underrated Features of HTML5 for Modern Web Development', description: "HTML5 has revolutionized web development with its rich features and capabilities, but beyond the basics, there are many underrated elements that can significantly enhance the functionality and user experience of modern websites. From powerful APIs to advanced multimedia support, HTML5 offers a range of tools that developers often overlook. In this article, we’ll explore some of these hidden gems and how they can elevate your web development projects.", image: 'https://i.ibb.co.com/0Md8vg6/htmlp.png', link: 'https://rakibul-98.medium.com/beyond-the-basics-exploring-the-underrated-features-of-html5-for-modern-web-development-20dba3efbf32' },
    { id: 1, title: 'Beyond Common Styling: Exploring Underrated CSS Features for Dynamic Web Design', description: "CSS is often associated with basic styling—colors, fonts, and layouts—but it has so much more to offer. Beyond the common properties, there are several underrated CSS features that can help create dynamic, interactive, and visually stunning web designs. From complex animations to flexible layouts, these hidden gems empower developers to push the boundaries of what’s possible with web design. In this article, we’ll dive into some of these powerful CSS features that can transform your next project.", image: 'https://i.ibb.co.com/FgV0TtD/CSS.png', link: 'https://rakibul-98.medium.com/beyond-common-styling-exploring-underrated-css-features-for-dynamic-web-design-a039033b647a' },
    { id: 3, title: 'A closer look: Web design vs Web development', description: "Web design and web development are two closely related disciplines within the field of creating websites and web applications. While they share some overlapping skills and responsibilities, they have different focuses and roles in the website creation process.", image: 'https://i.ibb.co.com/L6qTyrb/design-VSdev.png', link: 'https://rakibul-98.medium.com/web-design-vs-web-development-d11008da50e8' },
    { id: 4, title: '6 Reasons Your Business Needs an Online Presence', description: "In today's digital age, having an online presence is no longer optional for businesses - it's essential. Whether you're a small local shop or a large corporation, an effective online presence can significantly impact your brand's visibility, customer engagement, and growth. Here are six compelling reasons why your business needs to be online.", image: 'https://i.ibb.co.com/kQHPz7X/store.jpg', link: 'https://rakibul-98.medium.com/6-reasons-your-business-needs-an-online-presence-52e582582e0b' },
    { id: 5, title: '10 Most basic HTML tags you must know', description: 'HTML refers to the Hyper Text Markup Language. It is the language for describing the structure of Web pages. HTML is developed by WHATWG (The Web Hypertext Application Technology Working Group). The latest version of HTML is HTML-5 released in 2014.', image: 'https://i.ibb.co.com/3m3sJbg/html.jpg', link: 'https://rakibul-98.medium.com/10-most-basic-html-tags-you-must-know-473b9bd51973' },
  ];

  const [currentBlogIndex, setCurrentBlogIndex] = useState(blogs.length - 1);

  const handleBlogClick = (index) => {
    setCurrentBlogIndex(index);
  };


  return (
    <div className="h-screen w-10/12 md:w-11/12 xl:w-[1200px] mx-auto md:flex items-center gap-5 justify-between overflow-hidden p-5">
      <div className='md:h-full flex flex-col justify-evenly sm:w-10/12 sm:mx-auto md:w-5/12 lg:w-6/12 md:mb-10 mb-5'>
        <div className=''>
          <h2 className="text-2xl md:text-6xl uppercase font-bold md:font-extrabold blog-title">Blogs</h2>
          <small className="hidden md:block mt-2">&quot;Blogging is not about writing for yourself, <br className='hidden lg:block' /> it&apos;s about writing for your audience.&quot; — <i>Jeff Bullas</i></small>
        </div>
        <img className='hidden md:block md:h-72 xl:h-80' src={image} alt="" />
      </div>
      <div className='md:w-7/12 lg:w-6/12 mx-auto'>
        {blogs.slice().reverse().map((blog, index) => {
          const isActive = index === currentBlogIndex;

          return (
            <div
              key={blog.id}
              className={`sm:w-10/12 md:w-full lg:w-11/12 xl:w-10/12 mx-auto transition-all duration-300 rounded-xl bg-base-100 text-base-200  
              ${isActive ? 'z-10 shadow-2xl ' : 'cursor-pointer z-0 max-h-12 overflow-hidden'}`}
              style={{
                position: 'relative',
                marginTop: '-15px',
              }}
              onClick={() => handleBlogClick(index)}
            >
              <img src={blog.image} alt={blog.title} className="h-[160px] sm:h-[200px] w-full rounded-t-xl" />
              <div className='py-2 px-3'>
                <h3 className="text-md font-semibold overflow-hidden overflow-ellipsis line-clamp-2">{blog.title}</h3>
                <p className="text-sm my-1 overflow-hidden overflow-ellipsis line-clamp-3">{blog.description}

                </p>
                <div className='flex justify-end'>
                  <a className='text-sm my-1 underline hover:no-underline hover:text-primary' href={blog.link} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
