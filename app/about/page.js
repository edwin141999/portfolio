import ImageSize from "../components/imageSize";

export default function About() {
  return (
    <section className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-10 flex flex-col justify-evenly items-center" id="about">
      <h2 className=" text-4xl font-bold text-center">ABOUT ME</h2>
      <section className="flex flex-row justify-evenly">
        <ImageSize src={'/spiderman.jpg'} alt={'Picture of the author'} width={'300px'} height={'300px'} />
        <div className="flex flex-col justify-center space-y-5 w-2/6">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iste, incidunt, praesentium sequi libero quas sint dolore hic!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <button className="border-2 border-white px-3 py-0.5 font-semibold">View Resume</button>
          </div>
        </div>
      </section>
    </section>
  )
}