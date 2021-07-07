import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/services/account/account.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent implements OnInit {

  accounts!: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.listAccount().subscribe(accounts => {
      this.accounts = accounts;
    })
  }

}
