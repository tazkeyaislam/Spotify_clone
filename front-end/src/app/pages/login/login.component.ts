import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '228812235628-5ehvfsogt2jkbhaofue5vq7j19tesf4n.apps.googleusercontent.com',
      callback: (resp : any)=>{ 
        this.handleLogin(resp)
        console.log(resp)
      }
    }
    );
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350

    })
  }

  //decodes a JSON Web Token (JWT)
  private decodeToken(token: string){
    //here we're taking the 2nd part : payload
    return JSON.parse(atob(token.split(".")[1])); 
  }

  handleLogin(response:any){
    if (response){
      //decode the token
      const payload = this.decodeToken(response.credential)
      //store it
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload))
      //navigate to home page
      this.router.navigate(['browse'])
    }
  }
}
