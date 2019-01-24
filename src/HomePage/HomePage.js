import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import { ReactIcon, MongoIcon, ExpressIcon, NodejsIcon } from '../Assets/index'

const styles = theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: '48px',
    fontWeight: 'normal'
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    marginTop: '32px',
    border: `4px solid ${theme.palette.primary.main}`,
    width: '500px',
    height: '250px',
    background: theme.palette.secondary.main
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '%100'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    margin: '32px',
    padding: '16px',
    border: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
    background: theme.palette.secondary.main
  },
  icon: {
    height: '150px',
    width: '150px'
  }
})

const HomePage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <h1 className={classes.title}>MERN-Boilerplate</h1>
      </div>
      <div className={classes.logoContainer}>
        <MongoIcon className={classes.icon} />
        <ExpressIcon className={classes.icon} />
        <ReactIcon className={classes.icon} />
        <NodejsIcon className={classes.icon} />
      </div>
    </div>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
