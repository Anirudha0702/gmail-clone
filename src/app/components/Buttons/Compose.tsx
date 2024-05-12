import { MdOutlineEdit } from "react-icons/md";
function Compose({style = ""}: {style: string}) {
  return (
    <button className={`p-3 bg-teal-100 rounded-xl flex gap-4 hover:shadow-lg items-center w-36
    ${style}`}>
      <MdOutlineEdit size={30}/>
      <span>Compose</span>
    </button>
  )
}

export default Compose