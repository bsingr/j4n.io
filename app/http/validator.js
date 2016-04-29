'use strict'

const Joi = require('joi')

module.exports = (schema) => (req, res, next) => {
  Joi.validate(req.body, schema, (error) => {
    if (!error) {
      next()
    } else {
      res.status(422).send({
        message: 'Error – the request parameters could not be validated.',
        code: 422,
        errors: error.details
      })
    }
  })
}
