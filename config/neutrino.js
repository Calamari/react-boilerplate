module.exports = neutrino => {
  neutrino.config.module
    .rule('compile')
      .loader('babel', ({ options }) => {
        console.log(options)
        options.plugins.push('transform-decorators-legacy')

        return { options }
      })
}
