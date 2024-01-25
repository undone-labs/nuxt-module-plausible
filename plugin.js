// ///////////////////////////////////////////////////////////////////// Imports
// -----------------------------------------------------------------------------
import { defineNuxtPlugin } from '#imports'

// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export default defineNuxtPlugin((nuxtApp) => {

  // Do not fire Plausible if not in production mode
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  const router = nuxtApp.$router
  const config = nuxtApp.$config.public.siteUrl
  let isInitialPageLoad = true

  router.afterEach((to) => {

    // Ignore initial page because it's fired in the head
    if (isInitialPageLoad) {
      isInitialPageLoad = false
      return
    }

    // Check if we're on client-side
    if (process.client) {
      // Track virtual navigation changes
      window.plausible = window.plausible || function() {
        (window.plausible.q = window.plausible.q || []).push(arguments)
      }
      window.plausible('pageview', {
        url: `${config.public.siteUrl}${to.fullPath}`
      })
    }
  })
})
