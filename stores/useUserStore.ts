interface IEmail {
    email: string,
    password: string
}
const useUserStore = defineStore('user', () => {
  const supabase = useSupabaseClient()
  const user = ref()
  const error = ref()

  const signInWithEmail = async (details: IEmail) => {
    const { data, error: e } = await supabase.auth.signInWithPassword({
      email: details.email,
      password: details.password
    })

    if (e) {
      error.value = e
      return { data, error }
    }

    user.value = data
    return { data, error }
  }

  const signOut = async () => {
    const { error: e } = await supabase.auth.signOut()
    navigateTo('/register')
    if (e) { error.value = e }
  }

  const signUpWithEmail = async (details: IEmail) => {
    const { data, error: e } = await supabase.auth.signUp({
      email: details.email,
      password: details.password
    })

    if (e) {
      error.value = e
      return { data, error }
    }

    user.value = data
    return { data, error }
  }

  return {
    user,
    error,
    signInWithEmail,
    signOut,
    signUpWithEmail
  }
})

export default useUserStore
