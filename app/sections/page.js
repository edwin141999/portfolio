import Image from "next/image";

export default function Projects() {
    return(
        <section className="flex flex-col px-40 py-5 min-h-screen space-y-5">
        <h2 className="text-4xl font-bold text-center">PROJECTS</h2>
        <div className="flex flex-row">
          <div className="flex flex-col w-auto basis-2/5 mx-5">
            <h4 className="text-xl font-bold">Project 1</h4>
            <div className="flex-1 flex flex-col justify-center space-y-4">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ipsam rem. Ipsam, dignissimos aspernatur nam consequatur dolores unde corporis! Ut, quidem? Magnam nemo autem tempore numquam commodi quasi ut.</p>
            <div className="flex flex-row text-sm font-bold space-x-3">
              <button className="px-3 py-0.5 hoverborder">
                <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">See Project</span>
              </button>
              <button className="px-3 py-0.5 hoverborder">
                <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">Source Code</span>
              </button>
            </div>
            </div>
          </div>
          <div style={{position: "relative", width:'70em', height: '350px'}} className="drop-shadow-2xl">
          <Image src="/2099.jpg" fill alt="project image" sizes="100vh" style={{objectFit: 'cover'}}/>
          </div>
        </div>
      </section>
    )
}