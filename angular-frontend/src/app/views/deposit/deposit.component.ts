import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/services/account/account-login.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {


  account: AccountLogin = {
    account_number: "",
    account_password: "",
    amount: 0
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }


  setDeposit() {
    this.accountService.depositAccount(this.account).subscribe(response => {
      if (response) {
        this.router.navigate(['/sucess'])
      } else {
        this.accountService.showMessage('Não foi possivel realizar a transação!');
        this.router.navigate(['/account'])
      }
    })
  }

}
