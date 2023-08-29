import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formlogin!: FormGroup;
  submitted = false;
  loading = false;
  username!: string;
  password!: string;
  userService: UserService;
  
  constructor(private service: UserService, private formBuilder: FormBuilder) {
    this.userService = service;  

  }
  ngOnInit(){
    this.formlogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });
  }
  

  signIn(): void {
    this.userService.setUser({ name: 'Nate Murray' });
    this.username = this.userService.getUser().username;
    console.log('User name is: ' + this.username);
  }
  onSubmit() {}
  login(){
    const user:User = {
      username: this.username,
      password: this.password,
   }
   const userTest = {username:this.username,password:this.password}
    // console.log(this.username);
    console.log(userTest);
    this.userService.loginUser(userTest).subscribe((data) => {
      console.log(data);
    });
  }
}
