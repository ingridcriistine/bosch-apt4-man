import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, status}) => {
  return(
      <div className={style.boxCard}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <div className={status ? style.green : style.red}></div>
      </div>
  )
}