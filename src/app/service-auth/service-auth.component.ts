import { Component } from "@angular/core";
import { Profile, SupabaseService } from "../supabase.service";
@Component({
  selector: "app-service-auth",
  templateUrl: "./service-auth.component.html",
  styleUrls: ["./service-auth.component.css"],
})
export class ServiceAuthComponent {
  spotifyAuthorized = false;
  constructor(private readonly supabase: SupabaseService) {}

  async ngOnInit() {
    console.log("init");
    console.log(await this.supabase.getAccessToken());
    this.checkSpotifyStatus()
  }
  /**
   * verifies if the user has spotify credentials stored by invoking the check-spotify function
   * and setting the spotifyAuthorized variable to true if the user has spotify credentials stored
   */
  async checkSpotifyStatus(){
    console.log("check spotify status");  
    const token = await this.supabase.getAccessToken()
    console.log("token for check spotify", token)
    const resp = await this.supabase.invokeEdgeFunction("check-spotify", { headers: { Authorization: `Bearer ${token}` } })
    if(resp.data === "1"){
      this.spotifyAuthorized = true;
    }
  }
  /**
   * authorizes the user to use spotify by invoking the spotify-login function
   */
  async authorizeSpotify() {
    console.log("authorize spotify");
    const token = await this.supabase.getAccessToken();
    window.location.href = (
      await this.supabase.invokeEdgeFunction("spotify-login", { headers: { Authorization: `Bearer ${token}` } })
    ).data;
  }
}
