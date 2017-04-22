import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent{

  formGroup : FormGroup;
  posts : any[];
  constructor(private fb: FormBuilder, private userService: UserService) { 

    this.formGroup = fb.group({
      name:["Bien James",Validators.required],
      email:["eff@gmail.com",Validators.required],
      post:["test post",Validators.compose([Validators.required,Validators.minLength(10)])]
    })
  }

  onSubmit(){
    console.log(this.formGroup.value);
  }

  getData(){
    console.log("getData..");
    this.userService.getUserDetails().subscribe(
      (data)=>{
        console.log(data.json().name);
        let user = data.json();
        console.log(this.formGroup.controls['name'].value);
        this.formGroup.controls['name'].patchValue(user.name);
        this.formGroup.controls['email'].patchValue(user.email);
        // this.formGroup.controls['name'].value = user.name;
      }
    )

      this.userService.getUserPosts().subscribe(
      (data)=>{
        console.log("getPosts");
        let user = data.json();
        // console.log(user[0].body);
        this.formGroup.controls['post'].patchValue(user[0].body);

      }
    )
  }

}
