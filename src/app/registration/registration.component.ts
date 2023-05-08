import {Component} from '@angular/core';
import {User} from "./User";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [HttpService]
})

export class RegistrationComponent {


 user: User = new User("","");
 receivedUser: User | undefined;
 nickname: any;

  constructor(private readonly httpService: HttpService) { }

  submit(user : User) {
    this.httpService.postData(user)
      .subscribe({
        next:(data:any) => {this.receivedUser = data;},
        error: error => console.log(error)
      });
    this.httpService.addNickname(this.user.nickname).subscribe(() => {
      console.log('Nickname added successfully');
    });
  }
}
