import { useState } from 'react'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'

const AddBudget = () => {

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [formError, setFormError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !amount) {
      setFormError('Please fill in all the fields')
      return
    }

    // for some reason data returns null, even though new data inserts in the table
    const { data, error } = await supabase
      .from('budgets')
      .insert([{title, amount}])

    if (error) {
      setFormError('Failed to add budget')
    } else {
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className='add-budget'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Name: </label>
        <input 
        type='text' 
        value={title}
        id='title'
        onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='amount'>Maximum Spending: </label>
        <input 
        type='number'
        value={amount}
        id='amount'
        onChange={(e) => setAmount(e.target.value)}
        />

        <button className="add-budget-btn">Add</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default AddBudget