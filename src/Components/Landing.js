import image from '../Images/AI image.jpg';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Landing() {
    const config={
        subtitle: 'I am Mern Stack Developer',
        social:{
            'linkdn':'https://www.linkedin.com/in/faheem-rv-833956235/',
            'facebook':'',
            'github':''
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-around'>
        <div className='flex flex-col justify-center'>
            <div className="flex flex-col">
                <h1 className='md:w-1/2 text-white text-6xl font-Landing-font '>Hi,
                </h1>
                <h1 className=' text-white text-4xl flex flex-row font-Landing-font '>I am  &nbsp; <p className='text-black'>RV</p> &nbsp;Faheem</h1>
                <p className='text-2xl pl-1 font-Landing-font text-white'>{config.subtitle}</p>

            </div>
            <div className='py-5 flex flex-row '>
                <a className="pr-5 hover:text-white" href={config.social.linkdn}><FaLinkedin size={30} /> </a>
                <a className="pr-5 hover:text-white" href="#"><FaFacebook size={30} /> </a>
                <a className="hover:text-white" href="#"><FaGithub size={30} /> </a>
            </div>
        </div>

        <img className='md:w-1/3' src={image} />

    </section>
}