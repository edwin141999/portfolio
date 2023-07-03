import ImageSize from "../components/imageSize";

export default function About() {
  return (
    <section className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-10 flex flex-col justify-evenly items-center" id="about">
      <h2 className=" text-4xl font-bold text-center">ABOUT ME</h2>
      <section className="flex flex-col md:flex-row justify-evenly items-center space-y-10 md:space-y-0">
        <ImageSize src={'/spiderman.jpg'} alt={'Picture of the author'}  className={'imageabout'} />
        <div className="flex flex-col justify-center space-y-5 w-3/5 md:w-2/6">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iste, incidunt, praesentium sequi libero quas sint dolore hic!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex justify-center md:justify-start">
            <button className="border-2 border-white px-3 py-0.5 font-semibold">View Resume</button>
          </div>
        </div>
      </section>
    </section>
  )
}