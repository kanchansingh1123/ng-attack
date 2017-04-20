import { Component } from '@angular/core';

import { AuthService } from "angular2-social-login";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor(public _auth: AuthService){ }
  progressValue: number = 60;
  color: string = 'primary';
  modeToggle: boolean = false;
  sub;
    public uploader:FileUploader = new FileUploader({url: "firebase file upload url comes here"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileDrop(files:File[]){
    for( var j=0;j<files.length;j++){
      console.log(files[j]);
    }
  }
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
          console.log(data);
                  //user data 
                  //name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn) 
                } 
    )
  }
 
  logout(){
    this._auth.logout().subscribe(
      (data)=>{//return a boolean value.
      } 
    )
  }

  step(val: number) {
    this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  }

 
}
