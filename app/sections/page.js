import Image from "next/image";
import BtnRainbow from "../components/btnRainbow";

export default function Projects() {
  return (
    <section className="flex flex-col py-5 min-h-screen space-y-10">
      <h2 className="text-4xl font-bold text-center">PROJECTS</h2>
      {/* PROJECT 1 */}
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-auto basis-1/3 mx-5">
          <h4 className="text-xl font-bold">Project 1</h4>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ipsam rem. Ipsam, dignissimos aspernatur nam consequatur dolores unde corporis! Ut, quidem? Magnam nemo autem tempore numquam commodi quasi ut.</p>
            <div className="flex flex-row text-sm font-bold space-x-3">
              <BtnRainbow border={'hoverborder'} text={'See Project'} />
              <BtnRainbow border={'hoverborder'} text={'Source Code'} />
            </div>
          </div>
        </div>
        <div style={{ position: "relative", width: '700px', height: '350px' }} className="drop-shadow-2xl">
          <Image src="/2099.jpg" fill quality={100} alt="project image" sizes="100vh" style={{ objectFit: 'cover' }} />
        </div>
      </div>
      {/* PROJECT 2 */}
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-auto basis-1/3 mx-5">
          <h4 className="text-xl font-bold">Project 2</h4>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ipsam rem. Ipsam, dignissimos aspernatur nam consequatur dolores unde corporis! Ut, quidem? Magnam nemo autem tempore numquam commodi quasi ut.</p>
            <div className="flex flex-row text-sm font-bold space-x-3">
              <BtnRainbow border={'hoverborder'} text={'See Project'} />
              <BtnRainbow border={'hoverborder'} text={'Source Code'} />
            </div>
          </div>
        </div>
        <div style={{ position: "relative", width: '700px', height: '350px' }} className="drop-shadow-2xl">
          <Image src="/2099.jpg" fill quality={100} alt="project image" sizes="100vh" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  )
}