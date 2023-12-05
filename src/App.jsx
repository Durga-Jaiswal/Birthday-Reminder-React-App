import { useState } from 'react'
import List from './List.jsx'
import data from './data.js'
import './App.css'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays</h3>
          <List people = {people}/>
          <button 
          onClick= {() => setPeople([])}
            
          >Clear All</button>
          
        </section>
      </main>
    </>
  )
}

export default App
