
function Skill() {
  return (
    <div className='skill' style={{ backgroundColor: props.color}}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
    </div>
  )
}

export default Skill