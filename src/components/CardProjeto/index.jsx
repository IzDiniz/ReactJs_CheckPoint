// eslint-disable-next-line react/prop-types
function CardProjeto({projeto, foto, descricao}) {
    return <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
            <h1 className="text-3x1 text-white mt-10 text-4xl mb-5">{projeto}</h1>
            <img src={foto} alt={foto} className="w-6/12"/>
            <p className="text-white mt-5 mb-5 text-center">{descricao} </p>
        </div>
    </div>
}

export default CardProjeto;