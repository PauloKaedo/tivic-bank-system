import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/services/account/account-login.model';
import { Account } from 'src/app/services/account/account.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  accountResponse!: Account;

  account: AccountLogin = {
    account_number: "",
    account_password: "",
    amount: 0
  }

  constructor(private accountService: AccountService, private router: Router) { }


  ngOnInit(): void {

  }

  getAccount() {
    this.accountService.showAccount(this.account).subscribe(response => {
      const res = response && response.length > 0 ? response[0] : null;
      if (res) {
        this.accountResponse = res;
      } else {
        this.accountService.showMessage('Login incorreto!');
      }
    })
  }

}
