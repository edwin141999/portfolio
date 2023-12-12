"use client";
import { useState } from "react";
import BtnRainbow from "../components/btnRainbow";
import InputText from "../components/inputText";
import ModalNotification from "../components/modalNotification";

export default function Footer() {

  const [isSending, setIsSending] = useState(false)
  const [isLoader, setIsLoader] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoader(true)
    const formData = new FormData(e.target);

    console.log(process.env.NEXT_PUBLIC_KEY_API_CONTACT_FORM);

    formData.append('access_key', process.env.NEXT_PUBLIC_KEY_API_CONTACT_FORM);

    const object = Object.fromEntries(formData);
    console.log(object);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: json
    })

    const result = await response.json();
    if (result.success) {
      setIsSending(true)
      setIsLoader(false)
    }
  }

  return (
    <>
      <footer className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white flex flex-col py-10 items-center justify-around" id="contact" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-center">CONTACTO</h2>
        <form className="bg-white rounded-md text-black md:w-2/5 px-8 space-y-2 py-4 flex flex-col" >
          <p className="font-semibold">Nombre</p>
          <InputText placeholder={'Introduce tu nombre'} name={'name'} />
          <p className="font-semibold">Correo</p>
          <InputText placeholder={'Introduce tu correo electronico'} name={'email'} />
          <p className="font-semibold">Mensaje</p>
          <textarea
            type="text"
            className="border-2 rounded-md px-2 py-1 resize-none drop-shadow-md dark:bg-white"
            rows={3}
            placeholder="Introduce tu mensaje"
            name="message"
          />
          <div className="pt-6 pb-2">
            {isLoader ? (
              <div className="borderbtn py-1 px-6">
                <svg className="animate-spin w-6 h-6 bg-transparent rounded-full border-4 border-transparent border-opacity-50" style={{ borderRightColor: "black" }} viewBox="0 0 24 24">
                </svg>
              </div>
            ) : (
              <BtnRainbow border={'py-1 px-0 w-full borderbtn font-semibold'} text={'Enviar'} />
            )}
          </div>
        </form>
      </footer>
      {isSending && (
        <ModalNotification setIsSending={setIsSending} />
      )}
    </>
  )
}