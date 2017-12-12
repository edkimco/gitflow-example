const env = process.env.NODE_ENV || 'development'

const config = {
  version: 1.0,
  database: {
    hostname: 'development.com'
  }
}

if (env === 'production') {
  config.database = {
    hostname: 'production.com'
  }
}

module.exports = config
