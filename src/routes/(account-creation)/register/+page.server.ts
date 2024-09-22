import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
  register: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error: register_error } = await supabase.auth.signUp({ email, password })
    if (register_error) {
      console.error(register_error)
      redirect(303, '/register')
    }
    
    const { error: login_error } = await supabase.auth.signInWithPassword({ email, password })
    if (login_error) {
      console.error(login_error)
      redirect(303, '/login')
    }

    redirect(303, '/link-spotify')
  }
}