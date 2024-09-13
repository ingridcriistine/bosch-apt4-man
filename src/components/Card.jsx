import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, categoria, status}) => {
  return(
      <div className={style.boxCard}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <img src={image} alt={name} height={"auto"} className='imgCard'/>
          <h5>Categoria: {categoria}</h5>
          <p>R$ {value}</p>
          <div className={status ? style.green : style.red}></div>
      </div>
  )
}