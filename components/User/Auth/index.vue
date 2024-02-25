<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="flex flex-col gap-10 text-center w-[50%] justify-center">
      <div class="flex flex-col gap-2">
        <BaseHeading tag="h3" class="text-3xl font-bold tracking-tighter">
          {{ authType === 'SIGN_UP' ? 'Create an Account' : 'Log in to your account' }}
        </BaseHeading>
        <p class="text-sm text-subtle">
          {{ authType === 'SIGN_UP' ? 'Enter your email below to create an account.' : 'Enter your details below to log into your account' }}
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <BaseInput placeholder="janedoe@jacked.com" type="email" @updated="$event => email = $event" />
        <BaseInput placeholder="●●●●●●●" type="password" @updated="$event => password = $event" />
        <BaseButton class="p-2 font-semibold border rounded-lg bg-brand-strong text-inverse-clear" @click="handleSubmit()">
          {{ authType === "SIGN_UP" ? `Sign up` : `Log in` }}
        </BaseButton>
        <div v-if="authType === 'SIGN_UP'" class="max-w-lg mx-auto mt-2 text-sm text-center text-subtle">
          Already have an account? <span class="font-semibold underline cursor-pointer" @click="authType = 'LOG_IN'">Login</span>
        </div>
        <div v-else-if="authType === 'LOG_IN'" class="max-w-lg mx-auto mt-2 text-sm text-center text-subtle">
          Dont have an account? <span class="font-semibold underline cursor-pointer" @click="authType = 'SIGN_UP'">Register</span>
        </div>
      </div>

      <div class="relative flex flex-col justify-center w-full max-w-md gap-2 mx-auto">
        <p class="text-sm uppercase text-subtle before:content[''] before:w-[50px] xl:before:w-[120px] before:border before:border-subtle/50 before:h-0 before:absolute before:left-0 before:top-1/2 after:content[''] after:w-[50px] xl:after:w-[120px] after:border after:border-subtle/50 after:h-0 after:absolute after:right-0 after:top-1/2">
          Or continue with
        </p>
      </div>

      <div class="max-w-lg mx-auto text-sm text-center text-subtle">
        By clicking continue, you agree to our <u class="cursor-pointer">Terms of Service</u> and <u class="cursor-pointer">Privacy Policy</u>.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TAuthType = 'SIGN_UP' | 'LOG_IN'

const authType = ref<TAuthType>('SIGN_UP')
const error = ref()
const email = ref()
const password = ref()

const userStore = useUserStore()

const handleSubmit = async () => {
  if (authType.value === 'SIGN_UP') {
    const { data, error: e } = await userStore.signUpWithEmail({ email: email.value, password: password.value })

    if (data) { navigateTo('/') }
    if (e) { error.value = error }
  }

  if (authType.value === 'LOG_IN') {
    const { data, error: e } = await userStore.signInWithEmail({ email: email.value, password: password.value })
    if (data) { navigateTo('/') }
    if (e) { error.value = error }
  }
}
</script>
