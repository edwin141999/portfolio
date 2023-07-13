import ImageSize from "../components/imageSize";

export default function About() {
  return (
    <section className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-10 flex flex-col justify-evenly items-center" id="about">
      <h2 className=" text-4xl font-bold text-center">SOBRE MI</h2>
      <section className="flex flex-col md:flex-row justify-evenly items-center space-y-10 md:space-y-0">
        <ImageSize src={'/spiderman.jpg'} alt={'Picture of the author'} className={'imageabout'} typeFit={'cover'} />
        <div className="flex flex-col justify-center space-y-5 w-3/5 md:w-2/6">
          <p>Desarrollador web y de aplicaciones moviles junior en crecimiento con un fuerte interés y pasión por la programación. Capaz de aprender rapidamente para adaptarme a nuevos entornos y desafios tecnicos.</p>
          <p>Apto para trabajar de manera efectiva en equipo, colaborando con otros miembros del desarrollo para lograr los objetivos del proyecto.</p>
          <div className="flex justify-center md:justify-start">
            <button className="border-2 border-white px-3 py-0.5 font-semibold">
              <a href="https://www.linkedin.com/in/edwindavila/">
                Ver Curriculum
              </a>
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}