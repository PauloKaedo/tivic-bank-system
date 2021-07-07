import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-show',
  templateUrl: './account-show.component.html',
  styleUrls: ['./account-show.component.css']
})
export class AccountShowComponent implements OnInit {

  @Input() username: string;
  @Input() accountNumber: string;

  constructor() { }

  ngOnInit(): void {
  }

}
