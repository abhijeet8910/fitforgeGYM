
type buttonProps = {
    text: string
}
const Button = (text: buttonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700  font-bold py-3 px-4 rounded-lg hover:scale-95 active:scale-90 hover:shadow-lg text-sm text-white">
        {text.text}
    </button>
  )
}

export default Button
