
const FormContato = () => {

    const sendForms = async(event) =>{
        event.preventDefault();
        let nome = document.getElementById('nome').value; 
        let email = document.getElementById('email').value;
        let celular = document.getElementById('celular').value;
        console.log("A suas informações pessoais são:")
        console.log(`Nome: ${nome}`);
        console.log(`E-mail: ${email}`);
        console.log(`Celular: ${celular}`);
    }

  return (
    <div className="flex justify-center items-center h-[75vh]">
        <form className="flex flex-col gap-8 text-black w-[25%] h-[60%] bg-white p-10 rounded-lg" onSubmit={sendForms}>
            <div className="flex flex-col">
                <label htmlFor="nome" className="mr-5">Nome:</label> 
                <input type="text" className="h-10 p-2 border-2 border-gray-500" id="nome" placeholder="Digite seu nome"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mr-5">E-mail:</label> 
                <input type="email" className="h-10 p-2 border-2 border-gray-500" id="email" placeholder="Digite seu E-mail"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="celular" className="mr-4">Celular:</label> 
                <input type="number" className="h-10 p-2 border-2 border-gray-500" id="celular" placeholder="(xx) xxxx-xxxx"/>
            </div>

            <button className="bg-blue-600 hover:bg-blue-900 font-bold py-3 px-6 rounded-full text-white" >Enviar</button>
        </form>
    </div>
  )
}

export default FormContato