// eslint-disable-next-line react/prop-types
function CardTeams({nome, foto, rm}) {
    return <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
            <h1 className="text-3x1 text-white mt-10 text-4xl mb-5">{nome}</h1>
            <h2 className="text-white mt-5 mb-5 text-center text-2x1">{rm} </h2>
            <img src={foto} alt={foto} className="w-6/12"/>
        </div>
    </div>
}

export default CardTeams;