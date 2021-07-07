import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { SucessComponent } from './views/sucess/sucess.component';
import { AccountComponent } from './views/account/account.component';
import { BalanceComponent } from './views/balance/balance.component';
import { WithdrawComponent } from './views/withdraw/withdraw.component';
import { DepositComponent } from './views/deposit/deposit.component';
import { LoginComponent } from './views/login/login.component'
import { AccountCreateComponent } from './views/account-create/account-create.component'
import { AccountListComponent } from './views/account-list/account-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "account",
    component: AccountComponent
  },
  {
    path: "account/balance",
    component: BalanceComponent
  },
  {
    path: "account/withdraw",
    component: WithdrawComponent
  },
  {
    path: "account/deposit",
    component: DepositComponent
  },
  {
    path: "sucess",
    component: SucessComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "create",
    component: AccountCreateComponent
  },
  {
    path: "list",
    component: AccountListComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
