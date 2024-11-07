import image from '../Images/Resume.jpg'
export default function Resume() {
    // const config={
    //     File:Resume.pdf

    // }
    return <section id='resume' className='flex flex-col md:flex-row    bg-primary px-5'>

        <div className="py-5 md:w-1/2 flex justify-center ">
        <img className=' w-[300px] px-3 py-5 ' src={image} />
        </div>
        <div className=' md:1/2 flex flex-col justify-center text-white py-10'>
            <h1 className='border-b-4 border-primary flex justify-center text-3xl w-[110px]  mb-5 font-bold'>Resume</h1>
            <p>You can view my Resume <a className="btn" href='Resume.pdf' download="Resume.pdf">Download</a></p>




        </div>

    </section>
}