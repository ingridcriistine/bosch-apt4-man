import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import style from './App.module.css'

function Produtos() {
  return (
    <>
    <div className={style.wrapBtns}>
      <button><a href='/produtos'>Produtos</a></button>
      <button><a href='/api'>API</a></button>
      <button><a href='/mapa'>Mapa</a></button>
      <button><a href='/graficos'>Gráficos</a></button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
        <>
          <h2>Showroom de produtos</h2>
            <div className = {style.boxCards}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} categoria={item.categoria}/>
              )
             })}
            </div>
        </>
    </div>
    </>
  )
}

export default Produtos
