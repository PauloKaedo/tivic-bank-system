import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountCreate } from 'src/app/services/account/account-create.model';
import { Account } from 'src/app/services/account/account.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  account: AccountCreate = {
    username: "",
    account_password: "",
    initial_deposit: 0
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.accountService.createAccount(this.account).subscribe(() => {
      this.accountService.showMessage("Conta criada com Ssucesso! Confira o número da sua conta na listagem.");
      this.router.navigate(['/']);
    })
  }

}
