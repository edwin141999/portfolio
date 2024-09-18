import Image from "next/image"
import BtnRainbow from "./btnRainbow"

export default function GridItem({ title, description, img, skills, linkproject, linkgithub, className, keyNumber }) {
  const SKILLS = [
    { image: '/skills/html.svg', name: 'HTML' },
    { image: '/skills/css.svg', name: 'CSS' },
    { image: '/skills/javascript.svg', name: 'JavaScript' },
    { image: '/skills/react.svg', name: 'React.js' },
    { image: '/skills/tailwind.svg', name: 'Tailwind CSS' },
    { image: '/skills/vite.svg', name: 'Vite.js' },
    { image: '/skills/next.svg', name: 'Next.js' },
    { image: '/skills/typescript.svg', name: 'TypeScript' },
    { image: '/skills/react-redux.svg', name: 'React-Redux' },
  ]

  const clickHover = (id) => {
    const scaleArticle = document.getElementById(`article-hover-${id}`)
    const blurFilter = document.getElementById(`article-div-${id}`)
    const flexInfo = document.getElementById(`div-info-${id}`)

    scaleArticle.classList.toggle('article-hover')
    blurFilter.classList.toggle('div-article-hover')
    flexInfo.classList.toggle('div-info-hover')
  }

  const clickInfo = (id) => {
    document.getElementById(`article-hover-${id}`).addEventListener('click', clickHover(id))
  }

  return (
    <article
      className={`relative rounded-xl backdrop-blur-md border-black/10 shadow-sm shadow-white/10 overflow-hidden group hover:scale-110 duration-500 transition-transform ${className}`}
      id={`article-hover-${keyNumber}`}
      onClick={() => clickInfo(keyNumber)}
    >
      <div
        className="absolute left-0 right-0 bottom-0 h-full w-full transition duration-500 ease-in-out bg-blend-luminosity bg-center bg-cover bg-no-repeat -z-10 group-hover:blur-lg"
        style={{ backgroundImage: `url(${img})` }}
        id={`article-div-${keyNumber}`}
      />
      <div
        className="select-none hidden flex-col gap-1 p-6 text-lg z-20 justify-between items-center text-center h-full group-hover:flex"
        id={`div-info-${keyNumber}`}
      >
        <h2 className="font-semibold text-xl md:text-3xl text-white mb-4">{title}</h2>
        <h3 className="text-xs md:text-md lg:text-lg text-white text-pretty">{description}</h3>
        <div className="grid grid-cols-3 md:flex gap-5 md:overflow-auto scroll-pl-6 mx-auto md:mx-0">
          {skills.map((skill) => {
            return (
              SKILLS.map((skillname) => {
                if (skillname.name === skill) {
                  return (
                    <Image src={skillname.image} height={50} width={50} alt={'skill'} style={{ objectFit: 'contain' }} key={skill} priority={false} className="h-10 md:h-auto" />
                  )
                }
              })
            )
          })}
        </div>
        <div className="flex flex-row text-xs md:text-sm font-bold space-x-3 justify-center md:justify-start">
          {linkproject !== '' && <BtnRainbow border={'hoverborder'} text={'Ver proyecto'} link={linkproject} />}
          <BtnRainbow border={'hoverborder'} text={'Codigo fuente'} link={linkgithub} />
        </div>
      </div>
    </article>
  )
}