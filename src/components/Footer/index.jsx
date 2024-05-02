import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white py-10">
        <div className="flex justify-center bg-black text-white py-10">
            Copyright &copy; 2024 - FÓLIO.CODE
        </div>
        <div className="flex justify-center gap-5">
            <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
            <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
            <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
            <BsPinterest size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
        </div>
    </div>
  )
}

export default Footer