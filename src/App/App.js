import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import HomePage from '../HomePage/HomePage'
import theme from './App.theme'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <HomePage />
  </MuiThemeProvider>,
  document.getElementById('app')
)
