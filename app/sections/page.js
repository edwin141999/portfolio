import BtnRainbow from "../components/btnRainbow";
import ImageSize from "../components/imageSize";

export default function Projects() {

  const PROJECTS = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ipsam rem. Ipsam, dignissimos aspernatur nam consequatur dolores unde corporis! Ut, quidem? Magnam nemo autem tempore numquam commodi quasi ut.',
      image: '/2099.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ipsam rem. Ipsam, dignissimos aspernatur nam consequatur dolores unde corporis! Ut, quidem? Magnam nemo autem tempore numquam commodi quasi ut.',
      image: '/2099.jpg',
    },
  ]

  return (
    <section className="flex flex-col py-10 min-h-screen space-y-10 bg-white dark:bg-slate-900 dark:text-white" id="projects" >
      <h2 className="text-4xl font-bold text-center">PROJECTS</h2>
      {PROJECTS.map((project, index) => {
        return (
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start" key={project.id}>
            <div className="flex flex-col w-auto basis-1/3 mx-5 my-5 md:my-0">
              <h4 className="text-xl font-bold py-2 md:py-0">{project.title}</h4>
              <div className="flex-1 flex flex-col justify-center space-y-4 md:mt-5">
                <p className="font-medium">{project.description}</p>
                <div className="flex flex-row text-sm font-bold space-x-3 justify-center md:justify-start">
                  <BtnRainbow border={'hoverborder'} text={'See Project'} />
                  <BtnRainbow border={'hoverborder'} text={'Source Code'} />
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