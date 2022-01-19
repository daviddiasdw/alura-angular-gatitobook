import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { tinyValidator } from './tiny.validator';
import { UserExistsService } from './user-exists.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      userName: ['', [tinyValidator], [this.userExistsService.userExists()]],
      password: ['']
    })
  }

  register(){
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser)
  }
}
