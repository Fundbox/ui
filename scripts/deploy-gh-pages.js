/* eslint no-console: 0 */
const ghpages = require('gh-pages')

ghpages
  .publish('docs', {
    repo: `https://${process.env.GH_TOKEN}@github.com/Fundbox/ui.git`,
    user: {
      name: 'fundboxdeploy',
      email: 'contact@fundbox.com'
    }
  })
  .then(() => console.log('Published to gh-pages successfuly'))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
