import CardProjeto from "../CardProjeto"


const ProjectPage = () => {
  return (
    <div>
        <h1 className="flex justify-center text-9xl text-white font-mono"> Projetos </h1>
        <div className="grid grid-cols-2">
            <CardProjeto projeto="ReacJS" foto="https://reactemplates.com/static/e95e94697060f914e5716431e0f88ff2/d96a9/780791151055.png" descricao="Criação de Portfólios responsivos em React JS com Tailwind"/>
            <CardProjeto projeto="Curso de JavaScript" foto="https://jmvstream.com/wp-content/uploads/2023/06/JavaScript.jpeg" descricao="Criamos um curso dedicado a pessoas que estão interessadas em aprender JavaScript com a FÓLIO CODE em 2024"/>
            <CardProjeto projeto="Banco de Dados" foto="https://i.stack.imgur.com/SSyQd.png" descricao="Aplicações em Banco de dados SQL com integração de Java e Python"/>
            <CardProjeto projeto="Java Script" foto="https://www.datocms-assets.com/48401/1628644950-javascript.png" descricao="Crição de projetos voltados para JavaScript"/>
        </div>
    </div>
    
  )
}

export default ProjectPage