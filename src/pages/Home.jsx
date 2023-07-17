import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import BudgetCard from '../components/BudgetCard'

const Home = () => {
  const [budgets, setBudgets] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchBudgets = async () => {
      const { data, error } = await supabase
        .from('budgets')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the budgets')
        console.log(error)
        setBudgets(null)
      }

      if (data) {
        setBudgets(data)
        setFetchError(null)
      }
    }

    fetchBudgets()
  }, [])

  return (
    <div className='home'>
      {fetchError && (<p className='error'>{fetchError}</p>)}
      {budgets && (
        <div className='budgets'>
          {budgets.map(budget => (
            <BudgetCard key={budget.id} budget={budget} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home