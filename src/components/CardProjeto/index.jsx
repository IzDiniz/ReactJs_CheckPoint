/* eslint-disable react/prop-types */
function CardProjeto(props) {
    return <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
            <h1 className="text-3x1 text-white mt-10 text-4xl mb-5">{props.projeto}</h1>
            <img src={props.foto} alt={props.foto} className="w-6/12"/>
            <p className="text-white mt-5 mb-5 text-center">{props.descricao} </p>
        </div>
    </div>
}

export default CardProjeto;