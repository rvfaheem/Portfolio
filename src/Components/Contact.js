
export default function Contact() {
    const config={
        'email':'rvfaheem@gmail.com',
        'phone':'8593011784'
    }
    return <section id="contact" className='flex flex-col    bg-secondary px-5'>

 
        <div className=' flex flex-col  text-white px-5 py-32 items-center'>
            <h1 className='border-b-4 border-secondary flex justify-center text-3xl w-[110px]  mb-5 font-bold'>Contact</h1>
            <p className="pb-5">If you want to discuss more in detail,<br />please contact me </p>
            <p className="py-2"><span className="font-bold">Email : </span>{config.email}</p>
            <p className="py-2"><span className="font-bold">Phone : </span>{config.phone}</p>




        </div>

    </section>
}