import style from './App.module.css'
import { LineChart, Line, CartesianGrid, XAxis, Legend, Tooltip, YAxis } from 'recharts';

function Graficos() {
  const data = [
    {
      name: 'Ingrid',
      uv: 428,
      pv: 19
    },
    {
      name: 'Mariana',
      uv: 167,
      pv: 18
    },
    {
      name: 'Milena',
      uv: 145,
      pv: 18
    },
    {
      name: 'Helena',
      uv: 325,
      pv: 18
    },
    {
      name: 'Juliana',
      uv: 167,
      pv: 21
    }
  ];

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
      <h2>Gráficos</h2>
        <div className={style.graficos}>
          <div className={style.boxGrafico}>
            <h4>Gráfico de idades</h4>
            <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>

          <div className={style.boxGrafico}>
            <h4>Quantidade de commits</h4>
            <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
    </div>
    </>
  )
}

export default Graficos
