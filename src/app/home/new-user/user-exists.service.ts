import { switchMap, map, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {
  constructor(private newUserService: NewUserService) { }

  userExists(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nameUser) =>
          this.newUserService.checkUserExisting(nameUser)
        ),
        map((userExists) =>
          userExists ? { userExisting: true } : null
        ),
        first()
      )
    }
  }
}
