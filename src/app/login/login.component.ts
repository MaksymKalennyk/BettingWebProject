import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  body: Array<{email: string, nickname: string, password: string}> = [];
  nickname: any;
  password: any;
  email:any;
/*  data: any[] = [this.nickname,this.password,this.email]*/

  constructor(private http: HttpClient) {
    this.http.get<Array<{email: string, nickname: string, password: string}>>('http://localhost:8080/api/login').subscribe(body =>{
      console.log(body);
      this.body = body;
    })
  }
}
