import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { getMeals, deleteMeal } from '../actions'

const Meal = (props) => {

  const { meal, deleteMeal, getMeals } = props;
  const cdate = moment(meal.date_visited).format('11')

  const updateHandler = () => {
    localStorage.setItem('mealId', `${meal.id}`)
    localStorage.setItem('itemName', `${meal.item_name}`)
    localStorage.setItem('comment', `${meal.item_comment}`)
    props.history.push('./update-meal')
  }

  const deleteHandler = e => {
    e.preventDefault();
    deleteMeal(meal.id)
      .then(() => getMeals())
    props.history.push('/protected')
  }
  
  return (
    <div className='meal'>

      <div className='title'>
        <h2>{meal.restaurant_name}</h2>
        <p>{meal.restaurant_type}</p>
      </div>

      <div className='sub-title'>
        <p>{meal.item_name}</p>
        <img src={meal.item_photo} alt='' />
        <p><strong>Comment:</strong>{meal.item_comment}</p>
        <p>{cdate}</p>
        <button onClick={updateHandler}>Update the comment</button>
        <button onClick={deleteHandler}>Delete this meal</button>
      </div>

    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, { getMeals, deleteMeal })(withRouter(Meal))