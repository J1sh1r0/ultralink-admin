export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie('token').value
  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})
