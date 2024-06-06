import { Component, Inject, Injectable, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthSession } from "@supabase/supabase-js";
import { Profile, SupabaseService } from "../supabase.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgZone } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent implements OnInit {
  loading = false;
  profile!: Profile;

  @Input()
  session!: AuthSession;

  updateProfileForm = this.formBuilder.group({
    username: "",
    website: "",
    avatar_url: "",
  });

  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getProfile();

    const { username, website, avatar_url } = this.profile;
    this.updateProfileForm.patchValue({
      username,
      website,
      avatar_url,
    });
  }

  async getProfile() {
    if (!this.session) {
      console.error("Session is not defined");
      this.handleError();
      return;
    }
    try {
      this.loading = true;
      const { user } = this.session;
      const { data: profile, error, status } = await this.supabase.profile(
        user
      );

      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        this.profile = profile;
      }
    } catch (error) {
      if (error instanceof Error) {
        this.handleError();
      }
    } finally {
      this.loading = false;
    }
  }

  async updateProfile(): Promise<void> {
    try {
      this.loading = true;
      const { user } = this.session;

      const username = this.updateProfileForm.value.username as string;
      const website = this.updateProfileForm.value.website as string;
      const avatar_url = this.updateProfileForm.value.avatar_url as string;

      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
      });
      if (error) throw error;
    } catch (error) {
      if (error instanceof Error) {
        this.handleError();
      }
    } finally {
      this.loading = false;
    }
  }
  get avatarUrl() {
    return this.updateProfileForm.value.avatar_url as string;
  }

  async updateAvatar(event: string): Promise<void> {
    this.updateProfileForm.patchValue({
      avatar_url: event,
    });
    await this.updateProfile();
  }

  async signOut() {
    await this.supabase.signOut();
    this.router.navigate(["/"]);
  }
  private handleError() {
    this.router.navigate(["/"]);
  }
}
