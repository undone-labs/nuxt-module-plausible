console.log('📦 [load:module] nuxt-module-plausible')

// ///////////////////////////////////////////////////////////////////// Imports
// -----------------------------------------------------------------------------
import Path from 'path'

import { defineNuxtModule, addPlugin } from '@nuxt/kit'

// ////////////////////////////////////////////////////////////////////// Config
// -----------------------------------------------------------------------------
const meta = {
  name: '@undone-labs/nuxt-module-plausible',
  configKey: 'nuxtModulePlausible',
  compatibility: {
    nuxt: '^3.0.0'
  }
}

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ///////////////////////////////////////////////////////////////////// Plugins
const plugins = [
  {
    src: Path.resolve(__dirname, 'plugin.js'),
    filename: 'nuxt-module-plausible/index.js'
  }
]

// ///////////////////////////////////////////////////////////// registerPlugins
const registerPlugins = () => {
    plugins.forEach((plugin) => {
      addPlugin(plugin)
      console.log('🔌 [nuxt-module-plausible:plugin]')
    })
}

// /////////////////////////////////////////////////////////////////////// Setup
// -----------------------------------------------------------------------------
const setup = async (_, nuxt) => {
  if (nuxt.options.plausible.include) {
    registerPlugins()
  }
}
// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export default defineNuxtModule({
  meta,
  setup
})
