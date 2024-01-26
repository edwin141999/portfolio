import { useEffect, useState } from "react";
import GridItem from "../components/gridItem";

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-portfolio-chi.vercel.app/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setIsLoading(false)
      })
  }, [])

  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  if (isLoading) return (
    <div className="flex flex-col py-10 min-h-screen space-y-10 bg-white dark:bg-slate-900 dark:text-white justify-center text-center w-screen">
      <div className="flex flex-row justify-center items-center gap-10">
        <svg className="animate-spin h-10 w-10 mr-3 bg-transparent rounded-full border-4 border-transparent border-opacity-50" style={{ borderRightColor: "white" }} viewBox="0 0 24 24">
        </svg>
        <h1 className="text-4xl font-semibold md:text-6xl md:font-bold">Cargando...</h1>
      </div>
    </div>
  )

  return (
    <>
      <h2 className="text-4xl font-bold text-center bg-gray-200 dark:bg-slate-900 dark:text-white w-full pt-10 tracking-widest" id="projects">PROYECTOS</h2>
      <section className="grid grid-cols-2 md:grid-cols-10 auto-rows-[25rem] gap-10 w-full min-h-screen mx-auto p-20 bg-gray-200 dark:bg-slate-900 dark:text-white">
        {projects.map((project) => {
          return (
            <GridItem
              className={isPrime(project.id) ? `col-span-2 md:col-span-4` : 'col-span-2 md:col-span-6'}
              title={project.title}
              description={project.description}
              img={project.image}
              skills={project.skills}
              linkproject={project.linkproject}
              linkgithub={project.linkgithub}
              key={project.id}
              keyNumber={project.id}
            />
          )
        })}
      </section>
    </>
  )
}