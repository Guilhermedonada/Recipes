import React from 'react'
import Style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className={Style.recipe}>
      <h1 >{title}</h1>
      <ol>
        {ingredients.map(ingridient => (
          <li>{ingridient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={Style.image} src={image} alt=""/>
    </div>
  )
}

export default Recipe