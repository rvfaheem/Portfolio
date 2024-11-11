import image1 from '../Images/Project0.jpg'
import image2 from '../Images/Project2.jpg'
import image3 from '../Images/Project3.jpg'
import image4 from '../Images/Project4.jpg'
import image5 from '../Images/redux.jpg'

export default function Projects() {
    const config={
        projects:[
        {
            image: image1,
            description: 'A vibrant online platform connecting artisans with customers, showcasing and selling unique, handcrafted goods.',
            link: 'https://artisan-market.vercel.app/'
        },
        {
            image: image2,
            description: 'A web platform providing students with organized, accessible study materials and resources for efficient learning and exam preparation.',
            link: 'https://github.com/rvfaheem/Used-Study-Material'
        },
        {
            image: image3,
            description: 'A simple, user-friendly website for managing personal tasks with features to add, edit, delete, and track to-do items efficiently.',
            link: 'https://github.com/rvfaheem/Todo-List'
        },
        {
            image: image4,
            description: 'A responsive React app that fetches and displays real-time weather details for any city using the OpenWeatherMap API.',
            link: 'https://weather-app-zeta-livid-71.vercel.app/'
        },
                    {
            image: image5,
            description: 'You’ve created a Redux function in React to manage state and allow components to interact with the store through actions and reducers.',
            link: 'https://redux-sand-nine.vercel.app/'
        }
            

        ]
    }
    return <section id='projects' className='flex flex-col px-5 py-20 justify-center bg-secondary text-white'>
        <div className='w-full px-10 py-5 flex flex-col justify-center'>
            <h1 className='border-b-4 border-secondary flex justify-center text-3xl w-[110px]  mb-5 font-bold'>Projects</h1>
            <p>These are some of my best projects.I have built these with React,MERN and Tailwind Css.Check them out.</p>
        </div>
        <div className='w-full flex flex-col md:flex-row px-10 gap-5 relative'>
            {config.projects.map((project)=>(
                <div className='relative'>

                    <img className='h-[250px] w-[500px]' src={project.image} />
                    <div className='project-desc'>
                        <p className='text-center py-5 text-2xl text-white'>
                            {project.description}</p>
                            <div className="flex justify-center">
                            <a className="btn1 " target="_blank" href={project.link}  >View Project</a>
                            </div>
                            
                        
                    </div>


                </div>
            ))}
            </div>
            {/* <div className='relative'>
                <img className='h-[250px] w-[500px]' src={images} />
                <div className='project-desc'>
                    <p className='text-center py-5 text-2xl text-white'>
                        The art market is the marketplace of buyers and sellers trading in commodities, services, and works of art.
                    </p>


                </div>

            </div>
            <div className='relative'>
                <img className='h-[250px] w-[500px]' src={images} />
                <div className='project-desc'>
                    <p className='text-center py-5 text-2xl text-white'>
                        The art market is the marketplace of buyers and sellers trading in commodities, services, and works of art.
                    </p>
                </div>

            </div> */}

        {/* </div> */}
    </section>
}

