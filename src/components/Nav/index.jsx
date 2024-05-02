import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {

// Criando opção de abrir e fechar o menu lateral do mobile
const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(!toggle);
}

const navigate = useNavigate()

  return (
    <>
        <div className="flex items-center justify-between p-10 lg:flex-row">
            <div>
                {/* Criando Div com Âncora para a logo do site */}
                <a href="#" className="text-white font-mono text-3xl
                tracking-wider flex items-center"><CgNametag/> FÓLIO CODE</a>
            </div>

            <nav className="space-x-4">
                {/* Criando DIV com todos os botões/Âncoras do Nav Bar */}
                <div className="hidden lg:block space-x-2">    {/* Div usada para definir responsividade, Super-Small */}
                    <a href="/" className="text-white hover:bg-indigo-800
                    rounded-full px-5 py-2 cursor-pointer">Home</a>
                    <a onClick={() => navigate("/contato")} className="text-white hover:bg-indigo-800
                    rounded-full px-5 py-2 cursor-pointer">Contatos</a>
                    <a onClick={() => navigate("/projeto")} className="text-white hover:bg-indigo-800
                    rounded-full px-5 py-2 cursor-pointer">Projects</a>
                    <a onClick={() => navigate("/teams")} className="text-white hover:bg-indigo-800
                    rounded-full px-5 py-2 cursor-pointer">Team</a>
                </div>

                {/* Adicionando icon de menu para dispositivos móveis */}
                <div className="ssm:block lg:hidden">
                    {/* Adicionando display de abrir e fechar menu no mobile */}
                    {toggle ? (
                        <AiOutlineClose onClick={openMenu} size={30} className="text-white cursor-pointer"/>
                    ):(<HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer"/>)}
                    
                </div>
            </nav>
        </div>

        {/* MOVEL */}
        <div className=" lg:hidden"> {/* Criando o Mobile Menu */}
            {toggle ? (
                <div className="flex justify-between ml-10">
                <ul>
                    <li className="text-white text-xl mb-2 cursor-pointer" >Main</li>
                    <li className="text-white text-xl mb-2 cursor-pointer" onClick={() => navigate("/contato")}>Contatos</li>
                    <li className="text-white text-xl mb-2 cursor-pointer" onClick={() => navigate("/projeto")}>Projects</li>
                    <li className="text-white text-xl mb-2 cursor-pointer">Team</li>
                </ul>
            </div>
            ):(
                <div></div>
            )}
            
        </div>
    </>
  )
}

export default Nav