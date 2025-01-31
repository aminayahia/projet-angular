import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
    constructor(private http:HttpClient,private router:Router){
      this.loginObj = new Login();
    }
    onLogin(){
      alert('ddd');
     // debugger;
    
      this.http.post('http://localhost:5000/api/auth/login',this.loginObj).subscribe((res:any)=>{
        if(res.result){
          alert('login succes');
          this.router.navigateByUrl('/dashboard')
        }else{
          alert('login error')
        }
      })

    }
}



export class Login {
  email: string;
  password: string;
  constructor(){
    this.email = '';
    this.password = '';
  }
}
