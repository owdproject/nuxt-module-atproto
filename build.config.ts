import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  externals: ['@owdproject/module-docs/register'],
})
