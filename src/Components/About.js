import image from '../Images/About.jpg'
export default function About() {
    const config={
        line1:'Hi,My name is Faheem.I am a Full stack web developer.I built beatiful websites with React.js and Tailwind CSS.',
        line2:'I am proficient in Frontend skills like React.js,Redux,,Axios,Tailwind CSS and many more.',
        line3:'In backend I know Node.js,Express.js,Mongodb,and Mongoose.'
    }
    return <section id='about' className='flex flex-col md:flex-row justify-around align-center px-2 py-2 bg-primary'>

        
        <img className=' md:w-1/3 px-3 py-5 ' src={image} />
       
        <div className='md:1/2 flex flex-col justify-center text-white'>
            <h1 className='border-b-4 border-primary flex justify-center text-3xl w-[140px]  mb-5 font-bold'>About me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>



        </div>

    </section>
}