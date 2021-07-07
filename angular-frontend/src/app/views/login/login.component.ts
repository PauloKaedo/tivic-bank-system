import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/services/account/account-login.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  routerParam = "";
  
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
      if(response){
        this.router.navigate(['/account/balance'])
      } else {
        this.accountService.showMessage('Login incorreto!');
        this.router.navigate(['/account'])
      }
    })
  }

/*   setWithdraw() {
    this.accountService.withdrawAccount(this.account).subscribe(response => {
      if(response){
        this.router.navigate(['/sucess'])
      } else {
        this.accountService.showMessage('Não foi possivel realizar a transação!');
        this.router.navigate(['/account'])
      }
    })
  } */

/*   setDeposit() {
    this.accountService.depositAccount(this.account).subscribe(response => {
      if(response){
        this.router.navigate(['/sucess'])
      } else {
        this.accountService.showMessage('Não foi possivel realizar a transação!');
        this.router.navigate(['/account'])
      }
    })
  } */
}
