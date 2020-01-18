import React from 'react'

import { getMeals } from '../actions'

const Meal = (props) => {

  const { meal, getMeals } = props;
  
  return (
    <div className='meal'>
      <div className='title'>
        <h2>Meal</h2>
      </div>
      <div className='sub-title'>
        <h3>Subtitle</h3>
      </div>
    </div>
  )
}

export default Meal