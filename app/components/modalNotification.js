export default function ModalNotification({ setIsSending }) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-2/3 md:w-2/6 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl md:text-3xl font-semibold">
                ¡Mensaje enviado!
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-base md:text-lg leading-relaxed">
                ¡Gracias por contactarme! Te responderé lo más pronto posible.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end py-2 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsSending(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}