import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00ffd5'
    },
    secondary: {
      main: '#98969a'
    },
    text: {
      primary: '#000',
      secondary: '#FFF'
    },
    background: {
      default: '#535255'
    }
  },
  typography: {
    fontSize: 16
  }
})
