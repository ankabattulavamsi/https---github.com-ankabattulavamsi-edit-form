import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import CompB from './CompB'

const StyleProp = {
    mainContainer: {
        height: '150px',
        width: '150px', 
        borderRadius: '10px',
        color: 'red',
        border: '2px dashed blue'
    },
    heading: {
        color: 'yellow', 
        fontFamily: 'san serif', 
        fontWeight: '900'
    }
}

export class CompA extends Component {
  render() {
    return (
      <Box>
        <Typography>Component A</Typography>
        <CompB style={StyleProp} />
      </Box>
    )
  }
}

export default CompA
