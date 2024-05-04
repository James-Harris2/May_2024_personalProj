import Skill from "./Skill"

function SkillList() {
  return (
    <div className='skill-list'>
        <Skill skill='React' emoji='💪🏾' color="blue" />
        <Skill skill='HTML+CSS' emoji='💪🏾' color="orange" />
        <Skill skill='JavaScript' emoji='😂' color="yellow" />
        <Skill skill='NodeJs' emoji='👶🏾' color="orangered" />
        <Skill skill='MongoDB' emoji='👶🏾' color="light blue" />
        <Skill skill='Express' emoji='😊' color="pink" />
        <Skill skill='AWS' emoji='😊' color="purple" />

    </div>
  )
}

export default SkillList