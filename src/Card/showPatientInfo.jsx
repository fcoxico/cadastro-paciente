
import "../sytles/estilos.css";

function Card({name, time}) {
  return (
    <div className="card">
    <strong>{name}</strong>
    <small>{time}</small>
    </div>
  )
}

export default Card

/*
A propriedade "props" faz com que o componente que recebe as propriedades se comunique como o componente que gerou as propriedades. Sendo assim temos:

Componente Card recebendo o props.name e props.time

Componente Home enviando as propriedades mesmo que ele esteja importando a função card

*/