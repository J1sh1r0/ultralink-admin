export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token').value
  if (!token && to.path !== '/login') {
    return navigateTo('/login')
  }
})
