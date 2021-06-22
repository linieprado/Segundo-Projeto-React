import React, {useState, useEffect} from 'react'
import '../Card/styles.css'

const Card = () =>{
    const [personagens, setPersonagem] = useState([]) 
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        const pegaDados = async () => {
            const resposta = await fetch('http://hp-api.herokuapp.com/api/characters')
            const dados = await resposta.json()
            setPersonagem(dados)
        }
        pegaDados()
    },[])

    function addCurtida(id) {
        const novaListaPersonagens = personagens.map(personagem => {
            return personagem.name === id ? 
            {...personagem, favorite:!personagem.favorite}
            :personagem
        })
        setPersonagem(novaListaPersonagens)
    }

    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    },[busca, personagens])

    return(
        <>
            <input placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(personagem=> (
                <div key={personagem.id}>
                    <div className="main" >
                    <p>{personagem.name} - {personagem.house}</p>
                    <img src={personagem.image} alt={personagem.name}/>
                    {personagem.favorite && <span>Favorito</span>}
                    <div></div>
                    <button   onClick={()=>addCurtida(personagem.name)} >Favoritar <i class='fas fa-magic'></i></button>
                    </div>
                </div>
                
            ))}
        </>
    )
}

export default Card

