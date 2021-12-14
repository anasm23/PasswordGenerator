import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Hero from './components/Hero/hero';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './components/character'




function App() {
  const [password, setPassword] = useState('')
const [passlength, setpasslength] = useState(8)
const [upper, setupper] = useState(false)
const [lower, setlower] = useState(false)
const [num, setnum] = useState(false)
const [special, setspecial] = useState(false)

const handleGeneratePassword = (e) => {
  let char = ''
  if (lower) {
    char = char + lowerCaseLetters
  }

  if (upper) {
    char = char + upperCaseLetters
  }

  if (num) {
    char = char + numbers
  }

  if (special) {
    char = char + specialCharacters
  }

  setPassword(createPassword(char))
}

const createPassword = (char) => {
  let password = ''
  const charLength = char.length

  for (let i = 0; i < passlength; i++) {
    const characterIndex = Math.round(Math.random() * charLength)
    password = password + char.charAt(characterIndex)
  }
  return password
}

  return (
    <div className='App'>
      <Hero />
      <div>
        <div>
          <div class="card">
            <h1>Your Password :</h1>
            <h1 class="card-title">{password}</h1>
          </div>
          <div>
            <label />Password length (8-128):
            <input
              class="check-space"
              defaultValue={passlength}
              onChange={(e) => setpasslength(e.target.value)}
              type='number'
            />
            <label />Uppercase:
            <input
              class="check-space"
              checked={upper}
              onChange={(e) => setupper(e.target.checked)}
              type='checkbox'
            />
            <label />Lowercase:
            <input
              class="check-space"
              checked={lower}
              onChange={(e) => setlower(e.target.checked)}
              type='checkbox'
            />
            <label />Numbers:
            <input
              class="check-space"
              checked={num}
              onChange={(e) => setnum(e.target.checked)}
              type='checkbox'
            />
            <label />Symbols:
            <input
              class="check-space"
              checked={special}
              onChange={(e) => setspecial(e.target.checked)}
              type='checkbox'
            />
          </div>
          <button href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={handleGeneratePassword}>Generate Password</button>
        </div>
      </div>
    </div>
  )
}


export default App;
