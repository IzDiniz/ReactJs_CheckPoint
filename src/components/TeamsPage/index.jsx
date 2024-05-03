import CardTeams from "../CardTeams"
import FotoLuis from  "../../assets/Foto_de_perfil_Luis.jpg"
import FotoIago from  "../../assets/Imaiago.jpg"
import FotoEnzzo from  "../../assets/enzzo.jpg"


const ProjectPage = () => {
  return (
    <div>
        <h1 className="flex justify-center text-9xl text-white font-mono"> Projetos </h1>
        <div className="grid grid-cols-2">
            <CardTeams nome="Enzzo Monteiro" rm="552616" foto={FotoEnzzo}/>
            <CardTeams nome="Iago Diniz" rm="553776" foto={FotoIago}/>
        </div>
        <div className="flex justify-center ">
          <CardTeams nome="Luis Alberto" rm="553507" foto={FotoLuis} className="flex self-center"/>
        </div>
    </div>
    
  )
}

export default ProjectPage