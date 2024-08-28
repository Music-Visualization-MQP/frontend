import { Component, Input } from '@angular/core';
import { Profile, SupabaseService } from '../supabase.service';
import { AuthSession } from '@supabase/supabase-js';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  loading = false;
  
  profile!: Profile;

  @Input()
  session!: AuthSession;
  
  responseData: { data: any; error: any; } = { data: [], error: null };
  data : any[] = []
  constructor(private readonly supabase: SupabaseService) {
   
  }
  async getData(){
    console.log("check spotify status");  
    const token = await this.supabase.getAccessToken()
    console.log("token for check spotify", token)
    const resp = await this.supabase.invokeEdgeFunction("get-user-data", { headers: { Authorization: `Bearer ${token}` } })
    return resp;
  }
  async ngOnInit(): Promise<void> {
    this.responseData = await this.getData()
    if(this.data){
      this.data = JSON.parse(this.responseData.data)
      
      console.log(this.data)
    }
  }
  handleImage(item:any){
    console.log(item);
    return item
    /* if(item && item.images && item.images[0]) {
      console.log(item.images[0]);
      return item.images[0].thumbnails[250];
    }
    else return null; */
  }

}
