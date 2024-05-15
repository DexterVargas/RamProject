const Heading = ({ text }:{ text:string }) => {
  return (
    <span className="inline-block py-0.5 pl-3 text-heading z-20 font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:ml-20 before:top-0 before:left-0 before:bottom-0 before:-z-10 before:bg-indigo-50 font-['Caveat']">
        <i className="text-2xl text-primary"> { text } </i>
    </span>
  )
}

export default Heading