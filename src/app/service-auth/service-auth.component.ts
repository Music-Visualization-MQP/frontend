import { Component } from "@angular/core";
import { Profile, SupabaseService } from "../supabase.service";
@Component({
  selector: "app-service-auth",
  templateUrl: "./service-auth.component.html",
  styleUrls: ["./service-auth.component.css"],
})
export class ServiceAuthComponent {
  loading = false;
  constructor(private readonly supabase: SupabaseService) {}

  async ngOnInit() {
    console.log("init"); 
    console.log(await this.supabase.getAccessToken());
    console.log(await this.supabase.invokeEdgeFunction("check-spotify", { headers: { Authorization: `Bearer ${await this.supabase.getAccessToken()}` } }));
  }
  async checkSpotifyStatus(){

  }
  async authorizeSpotify() {
    console.log("authorize spotify");
    const token = await this.supabase.getAccessToken();
    window.location.href = (
      await this.supabase.invokeEdgeFunction("spotify-login", { headers: { Authorization: `Bearer ${token}` } })
    ).data;
  }
}
