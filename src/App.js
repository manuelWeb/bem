import React from 'react'
import { Link } from './Link.jsx'
import './App.scss'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link active href='#home'>
          Home
        </Link>
        <Link href='#about'>About</Link>
        <Link type='button'>Sign In</Link>
      </header>
    </div>
  )
}

export default App
