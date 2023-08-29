import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  userService: UserService;
  username!:string;
  password!:string;
  constructor(private service: UserService, private formBuilder: FormBuilder) {
    this.userService = service;    
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.form.controls; }
onSubmit() {}
register(){
  const user:User = {
    username: this.username,
    password: this.password,
 }
 console.log(user);
  this.userService.registerUser(user).subscribe((data) => {
    console.log(data);
  });
}
}
