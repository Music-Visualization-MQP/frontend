import { Component, OnInit } from '@angular/core'
import { SupabaseService } from './supabase.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management'

  session = this.supabase.session

  constructor(private readonly supabase: SupabaseService,
              private readonly router: Router,
  ) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => {
      this.session = session;
      if (session) {
        this.router.navigate(['/account']);
      }
    });
  }
}