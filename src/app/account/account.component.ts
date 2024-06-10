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
export class AccountComponent {
  @Input()
  session!: AuthSession;

  componentName: string = "account";
  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onKey(componentName: string): void {
    this.componentName = componentName;
  }
  switchComponent(): void {
    if (this.componentName === "account") {
      this.componentName = "data";
    } else {
      this.componentName = "account";
    }
  }
}
