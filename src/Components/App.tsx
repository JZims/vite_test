import { useState } from 'react'
import '../App.css'
import LinkedArticles from './LinkedArticles'
import NewArticle from './NewArticle'
import NewLink from './NewLink'

function App() {
  const [count, setCount] = useState(0)

  

  console.log("Suh")

  return (
    <div className="App">
      <LinkedArticles/>
      <NewArticle/>
      <NewLink />
    </div>
  )
}

export default App
