import React from 'react'
import styles from './recipes.module.css'

const Recipes = ({ title, calories, image, ingredients }) => {
  return (<div className={styles.Recipes}>
    <h1>{title}</h1>
    <img src={image} alt='image' className={styles.image}></img>
    <ol>
      {
        ingredients.map(ingredient => (<li>{ingredient.text}</li>)
        )}
    </ol>
    <p><b>Calories:</b>{calories}</p>

  </div>
  )

}


export default Recipes