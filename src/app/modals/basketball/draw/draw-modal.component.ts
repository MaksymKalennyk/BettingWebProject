import { Component } from '@angular/core';
import {Account} from "../../account/Account";
import {AccountService} from "../../account/AccountService";
import {DataService} from "../../services/DataService";
import {HttpService} from "../../services/httpService";

@Component({
  selector: 'app-draw-modal',
  templateUrl: './draw-modal.component.html',
  styleUrls: ['./draw-modal.component.css'],
  providers: [AccountService, HttpService]
})
export class DrawModalComponent {

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
