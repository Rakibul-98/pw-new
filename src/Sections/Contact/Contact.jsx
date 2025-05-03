// import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import profile from '../../assets/profile.png';
import { AiOutlineMedium } from 'react-icons/ai';
import { RiGithubLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Contact() {

  const input = [
    {
      id: 1,
      name: "name",
      type: "text",
      place: "Enter your name",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      place: "Enter your email",
    }
  ]

  const socialLinks = [
    { icon: <FaWhatsapp />, name: "Whatsapp", link: "https://wa.me/8801728976379", class: "hover:bg-[#25D366] border-[#25D366] text-[#25D366]" },
    { icon: <RiGithubLine />, name: "Github", link: "https://github.com/Rakibul-98", class: "hover:bg-black border-base-100 hover:border-base-200 text-base-100" },
    { icon: <FaLinkedinIn />, name: "Linkedin", link: "https://www.linkedin.com/in/rakibul-98/", class: "hover:bg-[#0077B5] border-[#0077B5] text-[#0077B5]" },
    { icon: <AiOutlineMedium />, link: "https://rakibul-98.medium.com/", name: "Medium", class: "hover:bg-[#333333] hover:border-base-200 border-base-100 text-base-100" },
    { icon: <FaFacebookF />, name: "Facebook", link: "https://www.facebook.com/rakibul.rupom2001", class: "hover:bg-[#1877F2] border-[#1877F2] text-[#1877F2]" },
  ]

  return (
    <div className="relative min-h-screen flex items-center py-10 text-sm">
      <div className="w-10/12 xl:w-[1100px] pr-5 lg:pr-0 mx-auto md:flex justify-between flex-row-reverse gap-10">
        <div className='md:w-[55%] lg:w-1/2 mb-10 lg:mb-0'>
          <div className="flex justify-between items-baseline">
            <h2 className='text-3xl font-medium'>Get in touch</h2>
            <div className='flex items-center gap-3'>
              {
                socialLinks.map((sl, i) =>
                  <a className={`p-1 text-lg rounded-full border hover:text-white hover:scale-125 hover:rotate-[720deg] cursor-pointer ${sl.class} duration-300`} key={i} href={sl.link} target="_blank" rel="noOpener noReferrer">{sl.icon}</a>
                )
              }
            </div>
          </div>
          <p className='my-3'>Questions? Ideas? Just want to say hi? Reach out →</p>
          <form className="" action="https://formsubmit.co/rakibul.hasan.private@gmail.com" method="POST">
            {
              input.map((ip, i) =>
                <input key={ip.id} className={`w-full lg:w-[calc(50%-4px)] p-2 mb-2 outline-none bg-base-200 border border-base-100 ${i === 0 ? 'mr-2' : ''}`} type={ip.type} name={ip.name} placeholder={ip.place} required />
              )
            }
            <input className='w-full p-2 outline-none bg-base-200 border border-base-100' type="text" name="subject" placeholder="Subject" required />
            <textarea className="w-full p-2 my-2 min-h-16 max-h-28 lg:max-h-48 lg:h-48 outline-none bg-base-200 border border-base-100" name='message' placeholder='Write your message here' required />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoResponse" value="I've just received your mail. I will back to you soon..." />
            <div className="flex justify-end"><button className='px-7 py-2 glow-btn bg-base-200 text-base-100 rounded-badge hover:bg-base-100 hover:text-base-200'>SUBMIT</button></div>
          </form>
        </div>
        <div className='lg:w-1/2 flex items-center mb-5'>
          <div>
            <div className='flex gap-8 mb-3'>
              <div className="avatar mb-3">
                <div className="ring-primary ring-offset-[#e0e8e2] w-16 rounded-full ring ring-offset-2">
                  <img src={profile} />
                </div>
              </div>
              <div className='flex items-center'>
                <img src="https://i.ibb.co/n7s9vgT/logo.png" className="h-14 -ml-3" alt="Logo" />
                <span className="self-center whitespace-nowrap text-5xl font-semibold mb-2">RH</span>
              </div>
            </div>
            <div>
              <p>Thanks for scrolling all the way down — that means a lot! </p> <p className='my-2'>This portfolio is not just a showcase — it’s a reflection of my journey, my values, and the impact I hope to make through technology. If something here caught your eye or sparked an idea, don’t hesitate to reach out.</p> <p>  Let’s connect and build something meaningful together.</p>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-primary">
              <Link to='/projects' className="hover:text-base-100">
                Projects
              </Link>
              {socialLinks.map((link) => (
                <Link key={link.link} to={link.link} target='_blank' className="hover:text-base-100">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className='absolute bottom-5 text-center w-full text-sm'><p>© All Rights Reserved | Design and Implemented by <a className='underline text-md font-semibold whitespace-nowrap hover:text-primary' href="https://github.com/Rakibul-98" target="_blank" rel="noReferrer">Rakibul Hasan</a></p></footer>
    </div>
  )
}
