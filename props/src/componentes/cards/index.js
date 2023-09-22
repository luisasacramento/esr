function Card(titulo, subtitulo, descriccao, img){
    return(
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descriccao}</p>
            <img alt="teste1" src={img} />
            <button>Saiba Mais</button>
        </div>
    )
}

export default Card