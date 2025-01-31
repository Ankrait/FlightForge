const pkg = require('./package');

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    'flight-forge.main': '/flight-forge',
    'flight-forge.detail': '/flight-forge/flights',
    'flight-forge.ticket-detail': '/flight-forge/flights/:flightNumber/:dest'
  },
  features: {
    'flight-forge': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'flight-forge.api': '/api',
  },
};
