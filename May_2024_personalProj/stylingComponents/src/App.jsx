import { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material';

import './App.css'

function App() {
  const options = ['Apple', 'Honey', 'Tea', 'Pears', 'Oranges']
  return (
    <div className='App'>
      <h1>Welcome State Mgmt practice James</h1>
        <h6>of course we care! </h6>
          <p> now pick a item </p>
        <Autocomplete
          options={options}
          renderInput={(params) => <TextField {... params} label='Items' />} />
        
    </div>
  )
}

export default App
