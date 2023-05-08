import { Component } from '@angular/core';
import {Account} from "../../account/Account";
import {AccountService} from "../../account/AccountService";
import {DataService} from "../../services/DataService";
import {HttpService} from "../../services/httpService";

@Component({
  selector: 'app-lose-modal',
  templateUrl: './lose-modal.component.html',
  styleUrls: ['./lose-modal.component.css'],
  providers: [AccountService, HttpService]
})
export class LoseModalComponent {

  user!: Account;
  nickname: any;
  amountOfMoney!: number;

  constructor(private accountService: AccountService, private dataService: DataService, private httpService: HttpService) {}

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
