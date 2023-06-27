import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white px-52 py-10 flex flex-col justify-center">
      <h2 className=" text-4xl font-bold text-center py-5">ABOUT ME</h2>
      <section className="flex flex-row space-x-10 ">
        <div style={{ position: "relative", width: '300px', height: '300px' }}>
          <Image src="/spiderman.jpg" alt="Picture of the author" fill quality={100} sizes="100vh" style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col justify-center space-y-5 basis-2/3 m-auto">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iste, incidunt, praesentium sequi libero quas sint dolore hic!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <button className=" border-2 border-white px-3 py-0.5 font-bold">View Resume</button>
          </div>
        </div>
      </section>
    </section>
  )
}