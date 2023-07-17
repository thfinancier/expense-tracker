import supabase from '../config/supabaseClient'

const BudgetCard = ({budget}) => {

  const handleDelete = async () => {

    const { error } = await supabase
      .from('budgets')
      .delete()
      .eq('id', budget.id)

      if (error) {
        console.log(error)
      }
  }

  return (
    <div className='budget-card'>
        <h2>{budget.title}</h2>
        <p>{budget.amount}</p>
        <i className="material-icons">edit</i>
        <i className="material-icons" onClick={handleDelete}>delete</i>
    </div>
  )
}

export default BudgetCard