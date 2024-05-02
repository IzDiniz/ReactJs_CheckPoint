import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import FormContato from "../../components/FormContato"

const Contato = () => {
  return (
    <div className="bg-indigo-600">
      <Nav/>
      <hr />
      <FormContato/>
      <hr />
      <Footer/>
    </div>
  )
}

export default Contato