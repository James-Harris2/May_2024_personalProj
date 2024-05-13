import Skill from '../Skill'
import SkillList from '../SkillList'
import Avatar from '../Avatar'
import Intro from '../Intro'
import './App.css'

function App() {
  

  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />

        {/* Skills from Vschool */}
        <SkillList />
      </div>

    </div>
  )
}

export default App
