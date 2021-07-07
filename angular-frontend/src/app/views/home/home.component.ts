import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router'
import { Account } from 'src/app/services/account/account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(){
    this.router.navigate(['create'])
  }

  listAccount(){
    this.router.navigate(['list'])
  }

  goToAccount(){
    this.router.navigate(['account'])
  }
}
