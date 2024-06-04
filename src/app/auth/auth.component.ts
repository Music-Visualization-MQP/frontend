import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { SupabaseService } from '../supabase.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  loading = false

  signInForm = this.formBuilder.group({
    email: '',
    password: '',
  })
  /**
   * 
   * @param supabase this is the custom supabase service defined in the supabase.service.ts file
   * @param formBuilder this is the angular form builder service
   */
  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
    
  ) {
  }


  /**
   * This function is called when the user submits the sign-in form. 
   */
  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const password = this.signInForm.value.password as string
      const { error } = await this.supabase.signIn(email, password)
      if (error) throw error
      /* else this.router.navigate(['/account']) */
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
}