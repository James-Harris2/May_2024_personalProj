// Resconstructed software development portfolio

import './css/normalize.css';
import './css/master.css';
import {Routes} from 'react-router-dom'
import Main from './components/index'
import MainTitle from './components/header/MainTitle';




function App() {
  

  return (
    <>
    <Routes path='/' components={MainTitle} />
    <MainTitle />
    <Main />
    </>
  )
}

export default App
