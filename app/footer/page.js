import BtnRainbow from "../components/btnRainbow";
import InputText from "../components/inputText";

export default function Footer() {
  return (
    <footer className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white flex flex-col py-10 items-center justify-around" id="contact">
      <h2 className="text-4xl font-bold text-center">CONTACTO</h2>
      {/* TODO: Poder enviar los mensajes a mi correo */}
      <div className="bg-white rounded-md text-black md:w-2/5 px-8 space-y-2 py-4 flex flex-col">
        <p className="font-semibold">Nombre</p>
        <InputText placeholder={'Introduce tu nombre'} />
        <p className="font-semibold">Correo</p>
        <InputText placeholder={'Introduce tu correo electronico'} />
        <p className="font-semibold">Mensaje</p>
        <textarea
          type="text"
          className="border-2 rounded-md px-2 py-1 resize-none drop-shadow-md dark:bg-white"
          rows={3}
          placeholder="Introduce tu mensaje"
        />
        <div className="m-auto pt-6 pb-2">
          <BtnRainbow border={'py-1 px-14 borderbtn font-semibold'} text={'Enviar'} />
        </div>
      </div>
    </footer>
  )
}