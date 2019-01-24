const merge = require('lodash/merge')
const User = require('../api/user/userModel')

const users = [
  { firstName: 'bob', lastName: 'dylan', email: 'bobdylan@yahoo.com' }
]

const createDoc = (Model, doc) => {
  return new Promise((resolve, reject) => {
    new Model(doc).save((err, saved) => {
      return err ? reject(err) : resolve(saved)
    })
  })
}

const cleanDB = () => {
  const cleanPromises = [User].map(model => {
    return model.deleteMany({}).exec()
  })
  return Promise.all(cleanPromises)
}

const createUsers = data => {
  const promises = users.map(user => {
    return createDoc(User, user)
  })

  return Promise.all(promises).then(createdUsers => {
    return merge({ users: createdUsers }, data || {})
  })
}

cleanDB().then(createUsers)
