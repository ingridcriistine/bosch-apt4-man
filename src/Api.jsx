import { useState, useEffect } from 'react'
import { CardPersonagem } from './components/CardPersonagem'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { ModalCard } from './components/ModalCard'

function Api() {
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [modal, setModal] = useState()

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem"),
        alert("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <div className={style.bgModal}>
    <div className={style.wrapBtns}>
      <button><a href='/produtos'>Produtos</a></button>
      <button><a href='/api'>API</a></button>
      <button><a href='/mapa'>Mapa</a></button>
      <button><a href='/graficos'>Gráficos</a></button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
        <>
        {modal !== undefined && <ModalCard character={data[modal]} close={() => setModal()}/>} 
          <h2>Rick and Morty API</h2>
            <div className={style.inputs}>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="search character" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className= {style.boxCards}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <CardPersonagem name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} type={item.type}/>
                <button onClick={() => setModal(item.id-1)}>Info</button>
              </div>
              )
           })}
        </div>
       </>
    </div>
    </div>
  )
}

export default Api
