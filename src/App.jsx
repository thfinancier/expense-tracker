import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import AddBudget from './pages/AddBudget'
import AddExpense from './pages/AddExpense'
import Home from './pages/Home'
import Edit from './pages/Edit'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <Link to='/'>Budgets</Link>
          <Link to='/add_budget'>Add budget</Link>
          <Link to='/add_expense'>Add expense</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add_budget' element={<AddBudget/>} />
          <Route path='/add_expense' element={<AddExpense/>} />
          <Route path='/:id' element={<Edit/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
