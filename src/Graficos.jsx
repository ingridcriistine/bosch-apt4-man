import style from './App.module.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Graficos() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
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
        <>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </>
    </div>
    </>
  )
}

export default Graficos
