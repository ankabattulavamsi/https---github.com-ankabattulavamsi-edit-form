import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'

interface IsProps {
    style: any
}

export class CompB extends Component<IsProps> {
  render() {
    const {style} = this.props 
    return (
      <Box sx={style.mainContainer}>
        <Typography>Comp B</Typography>
        <Typography sx={style.heading}>Made Changes</Typography>
      </Box>
    )
  }
}

export default CompB
