import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";
import HeroPic from "../../assets/EveryLegoStarWarsCharacter.jpeg";
import BannerPic from "../../assets/Home.png"
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate() 
  return (

    <div>
        <div className="flex justify-center h-screen">
            <img src={ BannerPic } alt="banner" />
        </div>
        <hr className="p-1" />

        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white w-full bg-indigo-600">

            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">The CEO</p>
                <h1 className="text-6xl">Mestre Yoda</h1>
                <hr />
            </div>


            <div className="w-1/3 items-center ssm:w-fit">
                <img src={ HeroPic } alt="ProfilePic" width={650} height={650} className="rounded-full border-8 w-full border-white"/>
            </div>


            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About Me:</p>
                <p className="text-slate-300"> 
                    Lets build quality in programming ad design with our services
                </p>
                <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white mt-5" onClick={() => navigate("/teams")}>
                    Show More...
                </button>

                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    <BsPinterest size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Hero