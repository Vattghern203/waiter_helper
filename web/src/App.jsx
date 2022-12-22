import { useState } from 'react'
import reactLogo from './assets/img/react.svg'

import { Search } from './components/Search/Search'
import { Header } from './components/Header/Header'
//import './App.css'
import './assets/css/main.css'

function App() {

  return (
    <div className="App">

      <Header/>

      <Search/>
      
    </div>
  )
}

export default App
