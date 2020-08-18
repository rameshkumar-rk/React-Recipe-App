import React from 'react';
import style from './recipet.css';

const Recipe=({title,calories,image,ing})=>
{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ing.map(i =>(
                    <li>
                        {i.text}
                    </li>
                ))}
            </ol>
            <h1>{calories}</h1>

            <img src={image} alt="no image"/>
        </div>
    )
}

export default Recipe;