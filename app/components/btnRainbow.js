export default function BtnRainbow({ text, border, onClick }) {
  return (
    <button className={`px-3 py-0.5 ${border}`} onClick={onClick} >
      <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">{text}</span>
    </button>
  )
}