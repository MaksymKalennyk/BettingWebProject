import { Component } from '@angular/core';
import {DataService} from "../../services/DataService";
import {AccountService} from "../../account/AccountService";
import {Account} from "../../account/Account";
import {HttpService} from "../../services/httpService";

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.css'],
  providers: [AccountService, HttpService]
})
export class WinModalComponent {

  user!: Account;
  nickname: any;
  amountOfMoney!: number;

  constructor(private accountService: AccountService, private dataService: DataService, private httpService: HttpService) { }

  ngOnInit(){
    this.nickname = this.dataService.getNickname();
    this.getAmountOfMoney(this.dataService.getNickname())
  }

  getAmountOfMoney(nickname: string) {
    this.accountService.getUser(nickname)
      .subscribe(data => {
        this.user = data;
        console.log(this.user.amountOfMoney)
      });
  }

  submit(){
    this.amountOfMoney = this.user.amountOfMoney - this.amountOfMoney;
    console.log(this.amountOfMoney);
    console.log(this.nickname)
    this.httpService.updateAmountOfMoney(this.nickname, this.amountOfMoney).subscribe(() => {
      console.log('Money updated successfully');
    });
  }
}
