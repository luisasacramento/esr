import './style.css';


const linkMenu = ['Quem Somos', 'Produtos', 'Serviços', 'sexta']

function menuHeader(){
    return(
        <ul className="opcoes">
            { linkMenu.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>

            ))}
        </ul>
    )
}

export default menuHeader