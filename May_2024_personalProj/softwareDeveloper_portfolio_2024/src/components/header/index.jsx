import author from '../header/asset.jpg'
import "./header.css"
import MainTitle  from './mainTitle'


const Header = () => {
  return (
    <div className='header'>
        <img src={author} alt="James"/>
            <MainTitle />
        <h1 className='main-title'>Portfolio...</h1>

        </div>
  )
}

export default Header