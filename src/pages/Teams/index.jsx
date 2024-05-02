import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import TeamsPage from "../../components/TeamsPage"

const Teams = () => {
  return (
    <div className="bg-indigo-600">
        <Nav/>
        <hr />
        <TeamsPage/>
        <hr />
        <Footer/>
    </div>
  )
}

export default Teams