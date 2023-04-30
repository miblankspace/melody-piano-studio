import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

function Contact() {
    return (
      <>
        <TextField id="name" label="Name" variant="standard" />
        <TextField id="student-name" label="Student Name" variant="standard" />
        <TextField id="email" label="Email" variant="standard" />
        <TextField id="phone" label="Phone" variant="standard" />
        <Button className='btn' variant='outline'>Submit</Button>
      </>
    )
  }
  
  export default Contact