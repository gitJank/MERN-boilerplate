const merge = require('lodash/merge')
const User = require('./userModel')

exports.params = (req, res, next, id) => {
  User.findById(id).then(
    user => {
      if (!user) {
        next(new Error('no user with that id'))
      } else {
        req.user = user
        next()
      }
    },
    err => {
      res.status(400).json(err)
    }
  )
}

exports.post = (req, res) => {
  const { body } = req

  User.create(body.card).then(
    user => {
      res.status(200).json(user)
    },
    err => {
      res.status(400).json(err)
    }
  )
}

exports.get = (req, res) => {
  User.find({}).then(
    users => {
      res.status(200).json(users)
    },
    err => {
      res.status(400).json(err)
    }
  )
}

exports.put = (req, res) => {
  const { user } = req

  const { body } = req

  merge(user, body.card)

  user.save((err, saved) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.json(saved)
    }
  })
}

exports.delete = (req, res) => {
  req.user.remove((err, removed) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(removed)
    }
  })
}
