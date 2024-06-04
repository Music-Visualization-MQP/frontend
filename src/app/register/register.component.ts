import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false

  registerForm = this.formBuilder.group({
    email: '',
    password: '',
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.registerForm.value.email as string
      const password = this.registerForm.value.password as string
      const { error } = await this.supabase.register(email, password)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.registerForm.reset()
      this.loading = false
    }
  }

}
