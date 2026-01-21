
type buttonProps = {
    text: string
}
const Button = (text: buttonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:scale-95 active:scale-90 hover:shadow-lg text-sm ">
        {text.text}
    </button>
  )
}

export default Button
