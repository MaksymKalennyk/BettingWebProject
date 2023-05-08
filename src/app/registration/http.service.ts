import {HttpClient} from "@angular/common/http";
import {User} from "./User";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class HttpService{
    constructor(private readonly http: HttpClient) { }

  postData(user:User){
      return this.http.post('http://localhost:8080/api/submit', user);
  }

  addNickname(nickname: string): Observable<any> {
    const data = {nickname: nickname};
    return this.http.post('http://localhost:8080/api/users/nickname', data, {responseType: "text"});
  }
}
