const { execSync } = require('child_process')

module.exports = () => ({
  getTagName: (pkg) =>
    `${pkg.name}-v${pkg.version}-gitpkg-3-${execSync(
      'git rev-parse --short HEAD',
      { encoding: 'utf-8' }
    ).trim()}`
})
