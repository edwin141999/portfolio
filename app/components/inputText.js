export default function InputText({ placeholder }) {
  return (
    <input
      type="text"
      className='border-2 rounded-md px-2 py-1 drop-shadow-md dark:bg-white'
      placeholder={placeholder}
    />
  )
}