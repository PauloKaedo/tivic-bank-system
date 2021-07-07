import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/services/account/account-login.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  account: AccountLogin = {
    account_number: "",
    account_password: "",
    amount: 0
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  setWithdraw() {
    this.accountService.withdrawAccount(this.account).subscribe(response => {
      if(response){
        this.router.navigate(['/sucess'])
      } else {
        this.accountService.showMessage('Não foi possivel realizar a transação!');
        this.router.navigate(['/account'])
      }
    })
  }
  
}
