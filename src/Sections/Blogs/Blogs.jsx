import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  const blogs = [
    {
      id: 2,
      title: 'Beyond the Basics: Exploring the Underrated Features of HTML5 for Modern Web Development',
      description: "HTML5 has revolutionized web development with its rich features and capabilities, but beyond the basics, there are many underrated elements that can significantly enhance the functionality and user experience of modern websites.",
      image: 'https://i.ibb.co.com/0Md8vg6/htmlp.png',
      link: 'https://rakibul-98.medium.com/beyond-the-basics-exploring-the-underrated-features-of-html5-for-modern-web-development-20dba3efbf32'
    },
    // {
    //   id: 1,
    //   title: 'Beyond Common Styling: Exploring Underrated CSS Features for Dynamic Web Design',
    //   description: "CSS is often associated with basic styling—colors, fonts, and layouts—but it has so much more to offer. Beyond the common properties, there are several underrated CSS features that can help create dynamic, interactive, and visually stunning web designs.",
    //   image: 'https://i.ibb.co.com/FgV0TtD/CSS.png',
    //   link: 'https://rakibul-98.medium.com/beyond-common-styling-exploring-underrated-css-features-for-dynamic-web-design-a039033b647a'
    // },
    {
      id: 3,
      title: 'A closer look: Web design vs Web development',
      description: "Web design and web development are two closely related disciplines within the field of creating websites and web applications. While they share some overlapping skills and responsibilities, they have different focuses and roles in the website creation process.",
      image: 'https://i.ibb.co.com/L6qTyrb/design-VSdev.png',
      link: 'https://rakibul-98.medium.com/web-design-vs-web-development-d11008da50e8'
    },
    // {
    //   id: 4,
    //   title: '6 Reasons Your Business Needs an Online Presence',
    //   description: "In today's digital age, having an online presence is no longer optional for businesses - it's essential. Whether you're a small local shop or a large corporation, an effective online presence can significantly impact your brand's visibility, customer engagement, and growth.",
    //   image: 'https://i.ibb.co.com/kQHPz7X/store.jpg',
    //   link: 'https://rakibul-98.medium.com/6-reasons-your-business-needs-an-online-presence-52e582582e0b'
    // },
    {
      id: 5,
      title: '10 Most basic HTML tags you must know',
      description: 'HTML refers to the Hyper Text Markup Language. It is the language for describing the structure of Web pages. HTML is developed by WHATWG (The Web Hypertext Application Technology Working Group).',
      image: 'https://i.ibb.co.com/3m3sJbg/html.jpg',
      link: 'https://rakibul-98.medium.com/10-most-basic-html-tags-you-must-know-473b9bd51973'
    },
  ];

  return (
    <div className="min-h-screen w-11/12 xl:w-[1200px] mx-auto py-10">
      <div className='text-center mb-10'>
        <h2 className="text-4xl md:text-6xl uppercase font-bold mb-2 blog-title">Blogs</h2>
        <p>&quot;Blogging is not about writing for yourself, it&apos;s about writing for your audience.&quot; — <i>Jeff Bullas</i></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Tilt key={blog.id}>
            <div  className="bg-base-300 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-sm line-clamp-3 my-5">{blog.description}</p>
                </div>
                <Link
                  to={blog.link}
                  target="_blank"
                  className="text-end inline-block text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
