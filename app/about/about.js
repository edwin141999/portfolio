import toast, { Toaster } from "react-hot-toast";
import ImageSize from "../components/imageSize";

const downloadCV = () => toast.loading('Cargando...')

export default function About() {
  return (
    <section className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-10 flex flex-col justify-evenly items-center" id="about">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-4xl font-bold text-center tracking-widest pb-5 md:pb-0">SOBRE MI</h2>
      <section className="flex flex-col md:flex-row justify-evenly items-center space-y-10 md:space-y-0">
        <ImageSize src={'/me.webp'} alt={'Picture of the author'} className={'imageabout z-0'} typeFit={'cover'} classNameImage={'rounded-full'} />
        <div className="space-y-5 w-3/5 md:w-2/6 text-pretty text-lg 2xl:text-2xl">
          <p>Me llamo Edwin, tengo 24 años, soy de Chiapas, México. Acabo de terminar mis estudios como Desarrollador de Software hace un año, me apasiona el desarrollo web, en especial en front-end, ya que me fascina todo lo visual en una página web.</p>
          <p>Colabore en el desarrollo de la página web de autobuses Tena con la empresa Pice Software en el 2022 como parte de mis prácticas profesionales, en el cual los dueños quedaron contentos ante tal diseño de la página.</p>
          <div className="flex justify-center md:justify-start">
            <button className="border-2 border-white px-3 py-0.5 font-semibold hover:bg-white group transition duration-500" onClick={downloadCV}>
              <a href="https://cv-edwin-davila.tiiny.site/" className="group-hover:text-slate-900 duration-500">
                Ver CV
              </a>
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}