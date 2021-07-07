import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AccountCreate } from './account-create.model';
import { AccountLogin } from './account-login.model';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:3035";

  accountsUrl = this.baseUrl + "/accounts"
  showAccountUrl = this.baseUrl + "/accounts/show"
  withdrawAccountUrl = this.baseUrl + "/accounts/withdraw"
  depositAccountUrl = this.baseUrl + "/accounts/deposit"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  createAccount(account: AccountCreate): Observable<Account> {
    return this.http.post<Account>(this.accountsUrl, account);
  }

  listAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  showAccount(account: AccountLogin): Observable<Account[]> {
    return this.http.post<Account[]>(this.showAccountUrl, account);
  }

  withdrawAccount(account: AccountLogin): Observable<Account> {
    return this.http.put<Account>(this.withdrawAccountUrl, account);
  }

  depositAccount(account: AccountLogin): Observable<Account> {
    return this.http.put<Account>(this.depositAccountUrl, account);
  }
}
