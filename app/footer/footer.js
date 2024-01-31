"use client";
import Link from "next/link";
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


    formData.append('access_key', process.env.NEXT_PUBLIC_KEY_API_CONTACT_FORM);

    const object = Object.fromEntries(formData);
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
        <h2 className="text-4xl font-bold text-center tracking-widest">CONTACTO</h2>
        <form className="bg-white rounded-md text-black md:w-2/5 px-8 space-y-2 py-4 flex flex-col" >
          <p className="font-semibold">Nombre</p>
          <InputText placeholder={'Introduce tu nombre'} name={'name'} />
          <p className="font-semibold">Correo</p>
          <InputText placeholder={'Introduce tu correo electrónico'} name={'email'} />
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
              <div className="borderbtn py-1 px-6 flex justify-center">
                <svg className="animate-spin w-6 h-6 bg-transparent rounded-full border-4 border-transparent border-opacity-50" style={{ borderRightColor: "black" }} viewBox="0 0 24 24">
                </svg>
              </div>
            ) : (
              <BtnRainbow
                border={'py-1 px-0 w-full borderbtn font-semibold group hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'}
                text={'Enviar'}
                spanClass={'flex justify-center group-hover:text-white'}
              />
            )}
          </div>
        </form>
      </footer>
      <div className="w-full py-8 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <hr className="my-3 border-white" />
        <div className="flex items-center justify-center px-10 pt-5">
          <span className="text-lg text-white sm:text-center">© 2024
          </span>
          <div className="flex sm:justify-center">
            <Link href={'https://github.com/edwin141999'} className="text-white hover:scale-125 transition-transform duration-500 ms-10">
              <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule={"evenodd"} />
              </svg>

            </Link>
            <Link href={'https://www.linkedin.com/in/edwindavila/'} className="text-white hover:scale-125 transition-transform duration-500 ms-10">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                <path fillRule="evenodd" clipRule={'evenodd'} fill="currentColor"
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {isSending && (
        <ModalNotification setIsSending={setIsSending} />
      )}
    </>
  )
}
