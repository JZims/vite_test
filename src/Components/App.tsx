import { useState } from 'react'
import { KApp } from '@kustomer/apps-server-sdk'
import React from 'react'
import '../App.css'
import LinkedArticles from './LinkedArticles'
import NewArticle from './NewArticle'
import NewLink from './NewLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Dude, SUH</h1>
    </div>
  )
}

export default App
