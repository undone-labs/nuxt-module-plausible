// ///////////////////////////////////////////////////////////////////// Imports
// -----------------------------------------------------------------------------
import { defineNuxtPlugin } from '#imports'

// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export default defineNuxtPlugin(() => {
  if (process.server) { return } // only run client-side

  const router = useRouter()
  const config = useRuntimeConfig().public

  // Only run in production OR if trackLocalhost is explcitly set to true
  if (process.env.NODE_ENV !== 'production' || !config.trackLocalhost === true) {
    return
  }

  let isInitialPageLoad = true

  router.afterEach(to => {

    // Ignore initial page because it's fired in the head
    if (isInitialPageLoad) {
      isInitialPageLoad = false
      return
    }

    // Track virtual navigation changes
    window.plausible = window.plausible || function () {
      (window.plausible.q = window.plausible.q || []).push(arguments)
    }

    window.plausible('pageview', {
      url: `${config.siteUrl}${to.fullPath}`
    })
  })
})
