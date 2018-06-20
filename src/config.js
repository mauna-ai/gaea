const {shape} = require('skema')
const path = require('path')

const Config = shape({
  port: Number,
  proto: {
    type: String,
    default:
  }

  // hostname
})

module.exports = absRoot => {
  const config = require(path.join(absRoot, 'config'))
  return Config.from(config)
}
