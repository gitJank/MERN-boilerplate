import React from 'react'
import mongoImport from './MongodbLogo.png'
import nodejsImport from './NodejsLogo.png'
import expressImport from './ExpressjsLogo.png'
import ReactImport from './ReactIcon.svg'

export const MongoIcon = props => {
  return <img src={mongoImport} alt="" {...props} />
}

export const NodejsIcon = props => {
  return <img src={nodejsImport} alt="" {...props} />
}

export const ExpressIcon = props => {
  return <img src={expressImport} alt="" {...props} />
}

export const ReactIcon = props => {
  return <ReactImport {...props} />
}
