import React from 'react'
import Data from '../../Data.json'
import Card from '../Card/Card'
import style from './Cards.module.css'

function Cards() {
    return (
        <div className={style.Cards}>
            {Data.map(item=><Card props={item} key={item.id}/>)}
        </div>
    )
}

export default Cards
