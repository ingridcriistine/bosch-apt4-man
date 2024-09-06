import style from './CardPersonagem.module.css'

/* eslint-disable react/prop-types */
export const CardPersonagem = ({name, status, species, type, gender, image}) => {
  return(
      <div className={style.boxCard}>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <p>{gender}</p>
          <p>{type}</p>
          <div className={status == 'Alive' ? style.green : style.red}>{status}</div>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}