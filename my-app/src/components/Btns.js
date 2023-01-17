import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Btns(props) {
  return (
     <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{background:"#52503B"}}> {props.title} </Button>
     </Stack>
  ) 
}

export default Btns