import style from './ModalCard.module.css'
import Draggable from 'react-draggable'; // The default

/* eslint-disable react/prop-types */
export const ModalCard = ({character, close}) => {
  return(
    <Draggable>
        <div className={style.boxCard}>
            <h1>Sobre</h1>
            <h2>{character.name}</h2>
            <p><b>Espécie:</b> {character.species}</p>
            <p><b>Gênero:</b> {character.gender}</p>
            <p><b>Local de origem:</b> {character.origin.name}</p>
            <p><b>Local atual:</b> {character.location.name}</p>
            <p><b>Status:</b> {character.status}</p>
            <img src={character.image} alt={name} width={150} height={"auto"} className='imgCard'/>
            <button onClick={close}>Close</button>
        </div>
    </Draggable>
  )
}