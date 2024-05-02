import { Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Contato from "../pages/Contato"
import Projeto from "../pages/Projeto"
import Teams from "../pages/Teams"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/teams" element={<Teams />} />
            
        </Routes>
    )
}