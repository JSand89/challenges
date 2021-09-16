import React from 'react'
import style from './Card.module.css'

function Card({props}) {
    //console.log(props)
    return (
        <div>
            <ul className={style.Card}>
                <li className={style.image}>image</li>
                <li>Reto: {props.Name}</li>
                <li><a href={props.DeployLink}>Web</a></li>
                <li><a href={props.GitHubLink}>Repositorio</a></li>
            </ul>
            
        </div>
    )
}

export default Card
