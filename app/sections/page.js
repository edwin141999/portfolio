import Image from "next/image";
import { useEffect, useState } from "react";
import BtnRainbow from "../components/btnRainbow";
import ImageSize from "../components/imageSize";

export default function Projects() {
  const [Projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const SKILLS = [
    { image: '/skills/html.png', name: 'HTML' },
    { image: '/skills/css.png', name: 'CSS' },
    { image: '/skills/javascript.png', name: 'JavaScript' },
    // { image: '/skills/react.png', name: 'React.js' },
    { image: '/skills/tailwind.png', name: 'Tailwind CSS' },
    { image: '/skills/react_native.png', name: 'React Native' },
    { image: '/skills/expo.png', name: 'Expo' },
    { image: '/skills/vite_js.png', name: 'Vite.js' },
  ]

  useEffect(() => {
    fetch('https://api-portfolio-chi.vercel.app/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return (
    <div className="flex flex-col py-10 min-h-screen space-y-10 bg-white dark:bg-slate-900 dark:text-white justify-center">
      <h1 className="text-6xl font-bold">Loading...</h1>
    </div>
  )

  return (
    <section className="flex flex-col py-10 min-h-screen space-y-10 bg-white dark:bg-slate-900 dark:text-white" id="projects" >
      <h2 className="text-4xl font-bold text-center">PROYECTOS</h2>
      {Projects.map((project) => {
        return (
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start" key={project.id}>
            <div className="flex flex-col w-2/3 md:w-auto basis-1/3 mx-5 my-5 md:my-0">
              {/* TDOO: Agregar titulos */}
              <h4 className="text-xl font-bold py-2 md:py-0">{project.title}</h4>
              <div className="flex-1 flex flex-col justify-center space-y-4 md:mt-5">
                {/* TODO: Agregar descripciones */}
                <p className="font-medium">{project.description}</p>
                <div className="flex gap-5 overflow-x-auto scroll-pl-6">
                  {project.skills.map((skill) => {
                    return (
                      SKILLS.map((skillname) => {
                        if (skillname.name === skill) {
                          // TODO: Fix the image size
                          return (
                            // <ImageSize key={skill} src={skillname.image} alt={'skill image'} className={'imageskills'} />
                            <Image src={skillname.image} height={50} width={50} alt={'skill'} sizes="100vh" style={{ objectFit: 'cover' }} key={skill}  />
                          )
                        }
                      })
                    )
                  })}
                </div>
                {/* TODO: Verificar si hay link de proyecto */}
                <div className="flex flex-row text-sm font-bold space-x-3 justify-center md:justify-start">
                  <BtnRainbow border={'hoverborder'} text={'Ver proyecto'} link={project.linkproject} />
                  <BtnRainbow border={'hoverborder'} text={'Codigo fuente'} link={project.linkgithub} />
                </div>
              </div>
            </div>
            <ImageSize src={project.image} alt={'project image'} className={'drop-shadow-2xl imageprojects'} />
          </div>
        )
      })}
    </section>
  )
}