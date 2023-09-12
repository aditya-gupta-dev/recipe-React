import React from 'react';
import style from './recipe.module.css'; 

export default function Recipe({title, calories, image, ingredients}) { 
    return(
        <div className={style.recipe}>
            <h1 className="display-4 p-3">{title}</h1>
            <ul> 
                {ingredients.map(ingredient => (
                    <li className="lead">{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.floor(calories)}g</p>
            <img className={style.image} src={image} alt="Cannot display :("/>
        </div>
    );
}
