import { step,children } from 'react'

function StepMessage() {
  return (
    <div className='message'>
        <h3>Step {step}</h3>
        {children}
    </div>
  )
}

export default StepMessage