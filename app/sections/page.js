import Image from "next/image";
import { useEffect, useState } from "react";
import BtnRainbow from "../components/btnRainbow";
import ImageSize from "../components/imageSize";

export default function Projects() {
  const [Projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const SKILLS = [
    { image: '/skills/html.svg', name: 'HTML' },
    { image: '/skills/css.svg', name: 'CSS' },
    { image: '/skills/javascript.svg', name: 'JavaScript' },
    { image: '/skills/react.svg', name: 'React.js' },
    { image: '/skills/tailwind.svg', name: 'Tailwind CSS' },
    { image: '/skills/react.svg', name: 'React Native' },
    { image: '/skills/expo.svg', name: 'Expo' },
    { image: '/skills/vite.svg', name: 'Vite.js' },
    { image: '/skills/flutter.svg', name: 'Flutter' },
    { image: '/skills/dart.svg', name: 'Dart' },
    { image: '/skills/aws.svg', name: 'AWS' },
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
    <div className="flex flex-col py-10 min-h-screen space-y-10 bg-white dark:bg-slate-900 dark:text-white justify-center text-center w-screen">
      <div className="flex flex-row justify-center items-center gap-10">
        <svg className="animate-spin h-10 w-10 mr-3 bg-transparent rounded-full border-4 border-transparent border-opacity-50" style={{ borderRightColor: "white" }} viewBox="0 0 24 24">
        </svg>
        <h1 className="text-6xl font-bold">Loading...</h1>
      </div>
    </div>
  )

  return (
    <section className="flex flex-col py-10 min-h-screen space-y-10 bg-white dark:bg-slate-900 dark:text-white" id="projects" >
      <h2 className="text-4xl font-bold text-center">PROYECTOS</h2>
      {Projects.map((project) => {
        return (
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start" key={project.id}>
            <div className="flex flex-col w-2/3 md:w-auto basis-1/3 mx-5 my-5 md:my-0">
              <h4 className="text-xl font-bold py-2 md:py-0">{project.title}</h4>
              <div className="flex-1 flex flex-col justify-center space-y-4 md:mt-5">
                <p className="font-medium">{project.description}</p>
                <div className="flex gap-10 overflow-auto scroll-pl-6 mx-auto md:mx-0">
                  {project.skills.map((skill) => {
                    return (
                      SKILLS.map((skillname) => {
                        if (skillname.name === skill) {
                          return (
                            <Image src={skillname.image} height={50} width={50} alt={'skill'} style={{ objectFit: 'contain' }} key={skill} />
                          )
                        }
                      })
                    )
                  })}
                </div>
                <div className="flex flex-row text-sm font-bold space-x-3 justify-center md:justify-start">
                  {project.linkproject !== '' && <BtnRainbow border={'hoverborder'} text={'Ver proyecto'} link={project.linkproject} />}
                  <BtnRainbow border={'hoverborder'} text={'Codigo fuente'} link={project.linkgithub} />
                </div>
              </div>
            </div>
            <ImageSize src={project.image} alt={'project image'} className={'drop-shadow-2xl imageprojects'} typeFit={'contain'} />
          </div>
        )
      })}
    </section>
  )
}